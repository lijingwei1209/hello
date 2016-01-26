/**
 * Created by ljw on 2016/1/20.
 */
function People(name)
{
    this.name=name;
    //对象方法
    this.say=function(){
        console.log("My name is "+this.name);
    }
}
//类方法
People.run=function(){
    console.log("I can run");
}
//原型方法
People.prototype.sayChinese=function(){
    console.log("我的名字是"+this.name);
}


//测试
var p1=new People("ljw");
p1.say();
People.run();
p1.sayChinese();