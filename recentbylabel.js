function rcentbytag(t){document.write('<ul class="recent-by-tag">');for(var e=0;e<numposts;e++){var r,n,i=t.feed.entry[e],l=i.title.$t;if(e==t.feed.entry.length)break;for(var o=0;o<i.link.length;o++){if("replies"==i.link[o].rel&&"text/html"==i.link[o].type)i.link[o].title,i.link[o].href;if("alternate"==i.link[o].rel){r=i.link[o].href;break}}try{n=i.media$thumbnail.url}catch(t){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),n=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://2.bp.blogspot.com/-giova1ZCh-A/Uzq6L8QTJNI/AAAAAAAAAJc/USXictTq_xs/s70-c/KM+Icon.png"}var u=i.published.$t,m=u.substring(0,4),g=u.substring(5,7),h=u.substring(8,10),f=new Array;f[1]="Januari",f[2]="Februari",f[3]="Maret",f[4]="April",f[5]="Mei",f[6]="Juni",f[7]="Juli",f[8]="Agustus",f[9]="September",f[10]="Oktober",f[11]="November",f[12]="Desember",document.write('<li class="clear">'),1==showpostthumbnails&&document.write('<a href="'+r+'" target ="_blank" title="'+l+'"><img class="rct-thumb" alt="'+l+'" src="'+n+'"/></a>'),document.write('<strong><a href="'+r+'" target ="_blank" title="'+l+'" rel="nofollow">'+l+"</a></strong>"),document.write("<br>");var p="";1==showpostdate&&(p='<span class="showdates">'+p+h+" "+f[parseInt(g,10)]+" "+m+"</span>",1),document.write(p),document.write("</li>"),e!=numposts-1&&document.write("")}document.write("</ul>")}