$(function(){
  const LEFT_CLICK = 0;
  const CENTER_CLICK = 1;
  document.addEventListener('click',function(evt){
    var target = evt.target;
    if (target instanceof HTMLAnchorElement &&
        target.href &&
        target.href.indexOf('http') !== 0) {
      evt.preventDefault();
      chrome.tabs.getSelected(null,function(tab){
        switch (evt.button) {
          case LEFT_CLICK :
            chrome.tabs.update(tab.id,{url:target.href});
            break;
          case CENTER_CLICK:
            chrome.tabs.create({
              url:target.href,
              selected:false
            });
            break;
        }
      });
    }
  },false);

  chrome.management.getAll(function(data){
      console.log(data);
      debugger;
    for (var i = 0; i < data.length; i++) {
      if(data[i].type == "package_app" || data[i].type == "hosted_app" || data[i].type == "legacy_packaged_app"){
      console.log(data[i]);
       $("#app_list").append("<p><a href='"   +data[i].appLaunchUrl + "'>" + "<img src='"+ data[i].icons[0].url + "' width='32' height='32' '>"  + "</a></p>");
       $("#app_list").append();
      console.log(data[i].appLaunchUrl);

      }

      }
  });

});
