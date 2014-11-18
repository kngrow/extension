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
          // debugger;
          var app_temp = _.template($("#app").html());
          for (var i = 0; i < data.length; i++) {
            if(data[i].type == "package_app" || data[i].type == "hosted_app" || data[i].type == "legacy_packaged_app"){
              console.log(data[i]);
              var iconnum = data[i].icons.length - 1;
              var app = {
                "name" : data[i].name,
                "url" : data[i].appLaunchUrl,
                "icon_url" : data[i].icons[iconnum].url
              };
              debugger;
               $("#app_list").append(app_temp(app));
              console.log(app_temp(app));

            }

          }
        });

      });
