const lang =["js","java","python","c++","ruby","swift"];

//lang.forEach(function(item){
 //   console.log(item);});


// lang.forEach(item => {
  //  console.log(item);})


//function printMe(item){
   // console.log(item);}
//lang.forEach(printMe);

//lang.forEach((item,i,arr)=>{
  //  console.log(item,i,arr);})

const mycode = [
    {
        'LanguageName' : 'JavaScript',
        'LanguageFileExtension' : 'js',
    },
   {
        'LanguageName' : 'Java',
        'LanguageFileExtension' : 'java',
    },
    {
        'LanguageName' : 'Python',
        'LanguageFileExtension' : 'py',
    },
    {
        'LanguageName' : 'C++',
        'LanguageFileExtension' : 'cpp',
    },
    {
        'LanguageName' : 'Ruby',
        'LanguageFileExtension' : 'rb',
    },
    {
        'LanguageName' : 'Swift',
        'LanguageFileExtension' : 'swift',
    }
]
mycode.forEach((item)=>{
    console.log(item.LanguageName);
}
);