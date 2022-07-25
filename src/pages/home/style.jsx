import styled from "styled-components";

export const HomeWrapper = styled.div`
overflow:hidden;
width:960px;
margin:0 auto;
`
export const HomeLeft = styled.div`
float:left;
width:625px;
margin-left:15px;
padding-top:30px;
.banner-img {
    width:625px;
    height:270px;
}
`
export const HomeRight = styled.div`
float:right;
width:280px;
padding-top:30px;
`
export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
float:left;
margin-left:18px;
margin-bottom:18px;
padding-right:10px;
height:32px;
line-height:32px;
background:#f7f7f7;
font-size:14px;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`
export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
}
`
export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:700;
    color:#333;
}
.desc{
    line-height:24px;
    font-size:13px;
    color:#999;
}
`
export const RecommendItem = styled.div`
float:right;
.pic{
    display:block;
    width:280px;
    height:50px;
    margin-bottom:6px;
    border-radius:4px;
    cursor:pointer;
}
`
export const DownloadApp = styled.div`
postion:relative;
overflow:hidden;
margin-top:6px;
margin-bottom: 30px;
padding: 10px 22px;
width: 280px;
border: 1px solid #f0f0f0;
border-radius: 6px;
background-color: #fff;
cursor:pointer;

box-sizing:border-box;
.qrcode{
    float:left;
    display:block;
    width:60px;
    height:60px;
}
`
export const DownloadInfo = styled.div`
float:left;
margin-top:15px;
margin-left:15px;
vertical-align:middle;
.title{
    font-size:15px;
    color:#333;
}
.desc{
    margin-top:4px;
    font-size:13px;
    color:#999;
}
`
export const AppCode = styled.div`
position:absolute;
right:310px;
top:100px;
padding:10px;
box-sizing:border-box;
width:200px;
height:200px;
background:#fff;
border:1px solid #fff;
border-radius:10px;
.appcode{
display:block;
width:180px;
height:180px;
}
&.appShow-enter {
    transition: all 0.5s ease-out;
}
&.appShow-exit {
    transition: all 0.5s ease-out;
}
`
export const WriterArea = styled.div`
float:right;
overflow:hidden;
margin-top:30px;
background:red;
width:280px;
`
export const WriterTitle = styled.div`
float:right;
width:280px;
margin-bottom:10px;
.author{
    float:left;
    font-size:14px;
    color:#969696;
}
.switch{
    float:right;
    font-size:14px;
    color:#969696;
}
`
export const WriterList = styled.div`
float:right;
width:280px;
.pic{
    float:left
}
.author{
    font-size:
}
.focus{
    float:right;

}
`
