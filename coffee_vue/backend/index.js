import express from "express";
import oracledb from "oracledb";

// Express 애플리케이션 생성
const app = express();
const port = 8081;

// json 데이터 받기 위해
app.use(express.json());

app.listen(port, ()=>{
    console.log('서버실행 port:',port);
});


//DB연결부분
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({libDir:'D:/instantclient_21_13'})

async function fun() {
    let con;
    try {
        con = await oracledb.getConnection({
            user: "soy2",
            password: "1234",
            connectString: "localhost:1521/xe"
        });
        const result = await con.execute(`SELECT * FROM VUE_MENU`);
        return result;
    } catch (err) {
        throw err;
    } finally {
        if (con) {
            try {
                await con.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}





// 기본 주소 요청 핸들러
app.get("/", (req, res) => {
  console.log("기본주소 요청");
  res.send("기본주소 요청");
});


// 목록 보이기
app.get("/list", async (req, res) => {
    try {
        const data = await fun();
        res.json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("서버 오류");
    }
});
