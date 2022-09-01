function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
          
  
}


Soru.prototype.cevabiKonrolEt = function(cevap) {
    return cevap == this.dogruCevap
}




let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "typescript", c: "Npm", d:"nuget"}, "c"),
    new Soru("2-Hangisi Frontend kapsamında değerlendirilmez?", {a: "css", b: "HTML", c: "JavaScript",d:"sql"}, "d"),
    new Soru("3-Hangisi Backend kapsamında değerlendirilmez?", {a: "Node.js", b: "typescript", c: "Angular", d:"React"}, "a"),
    new Soru("4-Hnagisi javascript programlama dilini kullanmaz?", {a: "react", b: "Angular", c: "Vue.js", d:"Asp.net"}, "d"),
];