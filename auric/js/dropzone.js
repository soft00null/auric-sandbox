!function(){function e(t){var i=e.modules[t];if(!i)throw new Error('failed to require "'+t+'"');return"exports"in i||"function"!=typeof i.definition||(i.client=i.component=!0,i.definition.call(this,i.exports={},i),delete i.definition),i.exports}e.modules={},e.register=function(t,i){e.modules[t]={definition:i}},e.define=function(t,i){e.modules[t]={exports:i}},e.register("component~emitter@1.1.2",function(e,t){function i(e){return e?function(e){for(var t in i.prototype)e[t]=i.prototype[t];return e}(e):void 0}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},i.prototype.once=function(e,t){function i(){n.off(e,i),t.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},i.fn=t,this.on(e,i),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1==arguments.length)return delete this._callbacks[e],this;for(var n,r=0;r<i.length;r++)if(n=i[r],n===t||n.fn===t){i.splice(r,1);break}return this},i.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),i=this._callbacks[e];if(i)for(var n=0,r=(i=i.slice(0)).length;r>n;++n)i[n].apply(this,t);return this},i.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},i.prototype.hasListeners=function(e){return!!this.listeners(e).length}}),e.register("dropzone",function(t,i){i.exports=e("dropzone/lib/dropzone.js")}),e.register("dropzone/lib/dropzone.js",function(t,i){(function(){var t,n,r,o,s,l,a,u,p={}.hasOwnProperty,d=[].slice;n="undefined"!=typeof Emitter&&null!==Emitter?Emitter:e("component~emitter@1.1.2"),a=function(){},(t=function(e){function t(e,n){var r,o,s;if(this.element=e,this.version=t.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(t.instances.push(this),this.element.dropzone=this,r=null!=(s=t.optionsForElement(this.element))?s:{},this.options=i({},this.defaultOptions,r,null!=n?n:{}),this.options.forceFallback||!t.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(o=this.getExistingFallback())&&o.parentNode&&o.parentNode.removeChild(o),!1!==this.options.previewsContainer&&(this.previewsContainer=this.options.previewsContainer?t.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=!0===this.options.clickable?[this.element]:t.getElements(this.options.clickable,"clickable")),this.init()}var i;return function(e,t){function i(){this.constructor=e}for(var n in t)p.call(t,n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype}(t,n),t.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached"],t.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:1280,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:100,thumbnailHeight:100,maxFiles:10,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File size can not be more than{{maxFilesize}}MB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"Maximum 1 files can be uploaded.",accept:function(e,t){return t()},init:function(){return a},forceFallback:!1,fallback:function(){var e,i,n,r,o,s;for(this.element.className=this.element.className+" dz-browser-not-supported",r=0,o=(s=this.element.getElementsByTagName("div")).length;o>r;r++)e=s[r],/(^| )dz-message($| )/.test(e.className)&&(i=e,e.className="dz-message");return i||(i=t.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(i)),(n=i.getElementsByTagName("span")[0])&&(n.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):i>n?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:a,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:a,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var i,n,r,o,s,l,a,u,p,d,c,h,m;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=t.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),o=0,a=(d=e.previewElement.querySelectorAll("[data-dz-name]")).length;a>o;o++)i=d[o],i.textContent=e.name;for(s=0,u=(c=e.previewElement.querySelectorAll("[data-dz-size]")).length;u>s;s++)i=c[s],i.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),n=function(i){return function(n){return n.preventDefault(),n.stopPropagation(),e.status===t.UPLOADING?t.confirm(i.options.dictCancelUploadConfirmation,function(){return i.removeFile(e)}):i.options.dictRemoveFileConfirmation?t.confirm(i.options.dictRemoveFileConfirmation,function(){return i.removeFile(e)}):i.removeFile(e)}}(this),m=[],l=0,p=(h=e.previewElement.querySelectorAll("[data-dz-remove]")).length;p>l;l++)r=h[l],m.push(r.addEventListener("click",n));return m}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,r,o,s;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),e.previewElement.classList.add("dz-image-preview"),s=[],n=0,r=(o=e.previewElement.querySelectorAll("[data-dz-thumbnail]")).length;r>n;n++)i=o[n],i.alt=e.name,s.push(i.src=t);return s}},error:function(e,t){var i,n,r,o,s;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),s=[],n=0,r=(o=e.previewElement.querySelectorAll("[data-dz-errormessage]")).length;r>n;n++)i=o[n],s.push(i.textContent=t);return s}},errormultiple:a,processing:function(e){return e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink)?e._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:a,uploadprogress:function(e,t){var i,n,r,o,s;if(e.previewElement){for(s=[],n=0,r=(o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]")).length;r>n;n++)i=o[n],s.push(i.style.width=t+"%");return s}},totaluploadprogress:a,sending:a,sendingmultiple:a,success:function(e){return e.previewElement?e.previewElement.classList.add("dz-success"):void 0},successmultiple:a,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:a,complete:function(e){return e._removeLink?e._removeLink.textContent=this.options.dictRemoveFile:void 0},completemultiple:a,maxfilesexceeded:a,maxfilesreached:a,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'},i=function(){var e,t,i,n,r,o,s;for(n=arguments[0],o=0,s=(i=2<=arguments.length?d.call(arguments,1):[]).length;s>o;o++){t=i[o];for(e in t)r=t[e],n[e]=r}return n},t.prototype.getAcceptedFiles=function(){var e,t,i,n,r;for(r=[],t=0,i=(n=this.files).length;i>t;t++)e=n[t],e.accepted&&r.push(e);return r},t.prototype.getRejectedFiles=function(){var e,t,i,n,r;for(r=[],t=0,i=(n=this.files).length;i>t;t++)e=n[t],e.accepted||r.push(e);return r},t.prototype.getFilesWithStatus=function(e){var t,i,n,r,o;for(o=[],i=0,n=(r=this.files).length;n>i;i++)t=r[i],t.status===e&&o.push(t);return o},t.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(t.QUEUED)},t.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(t.UPLOADING)},t.prototype.getActiveFiles=function(){var e,i,n,r,o;for(o=[],i=0,n=(r=this.files).length;n>i;i++)e=r[i],(e.status===t.UPLOADING||e.status===t.QUEUED)&&o.push(e);return o},t.prototype.init=function(){var e,i,n,r,o,s,l,a,u,p,d,c,h,m,f,g,v,y;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(n=function(e){return function(){return e.hiddenFileInput&&document.body.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.body.appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,i,r,o;if((i=e.hiddenFileInput.files).length)for(r=0,o=i.length;o>r;r++)t=i[r],e.addFile(t);return n()})}}(this))(),this.URL=null!=(s=window.URL)?s:window.webkitURL,r=0,o=(l=this.events).length;o>r;r++)e=l[r],this.on(e,this.options[e]);return this.on("uploadprogress",(y=this,function(){return y.updateTotalUploadProgress()})),this.on("removedfile",(v=this,function(){return v.updateTotalUploadProgress()})),this.on("canceled",(g=this,function(e){return g.emit("complete",e)})),this.on("complete",(f=this,function(){return 0===f.getUploadingFiles().length&&0===f.getQueuedFiles().length?setTimeout(function(){return f.emit("queuecomplete")},0):void 0})),i=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:(m=this,function(e){return m.emit("dragstart",e)}),dragenter:(h=this,function(e){return i(e),h.emit("dragenter",e)}),dragover:(c=this,function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}return e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",i(e),c.emit("dragover",e)}),dragleave:(d=this,function(e){return d.emit("dragleave",e)}),drop:(p=this,function(e){return i(e),p.drop(e)}),dragend:(u=this,function(e){return u.emit("dragend",e)})}}],this.clickableElements.forEach((a=this,function(e){return a.listeners.push({element:e,events:{click:function(i){return e!==a.element||i.target===a.element||t.elementInside(i.target,a.element.querySelector(".dz-message"))?a.hiddenFileInput.click():void 0}}})})),this.enable(),this.options.init.call(this)},t.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,t.instances.splice(t.instances.indexOf(this),1)},t.prototype.updateTotalUploadProgress=function(){var e,t,i,n,r,o,s;if(i=0,t=0,this.getActiveFiles().length){for(r=0,o=(s=this.getActiveFiles()).length;o>r;r++)e=s[r],i+=e.upload.bytesSent,t+=e.upload.total;n=100*i/t}else n=100;return this.emit("totaluploadprogress",n,t,i)},t.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},t.prototype.getFallbackForm=function(){var e,i,n,r;return(e=this.getExistingFallback())?e:(n='<div class="dz-fallback">',this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',i=t.createElement(n),"FORM"!==this.element.tagName?(r=t.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(i):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=r?r:i)},t.prototype.getExistingFallback=function(){var e,t,i,n,r,o;for(t=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},n=0,r=(o=["div","form"]).length;r>n;n++)if(i=o[n],e=t(this.element.getElementsByTagName(i)))return e},t.prototype.setupEventListeners=function(){var e,t,i,n,r,o,s;for(s=[],n=0,r=(o=this.listeners).length;r>n;n++)e=o[n],s.push(function(){var n,r;n=e.events,r=[];for(t in n)i=n[t],r.push(e.element.addEventListener(t,i,!1));return r}());return s},t.prototype.removeEventListeners=function(){var e,t,i,n,r,o,s;for(s=[],n=0,r=(o=this.listeners).length;r>n;n++)e=o[n],s.push(function(){var n,r;n=e.events,r=[];for(t in n)i=n[t],r.push(e.element.removeEventListener(t,i,!1));return r}());return s},t.prototype.disable=function(){var e,t,i,n,r;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),r=[],t=0,i=(n=this.files).length;i>t;t++)e=n[t],r.push(this.cancelUpload(e));return r},t.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},t.prototype.filesize=function(e){var t;return e>=109951162777.6?(e/=109951162777.6,t="TiB"):e>=107374182.4?(e/=107374182.4,t="GiB"):e>=104857.6?(e/=104857.6,t="MiB"):e>=102.4?(e/=102.4,t="KiB"):(e*=10,t="b"),"<strong>"+Math.round(e)/10+"</strong> "+t},t.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},t.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),(t=e.dataTransfer.files).length&&((i=e.dataTransfer.items)&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},t.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},t.prototype.handleFiles=function(e){var t,i,n,r;for(r=[],i=0,n=e.length;n>i;i++)t=e[i],r.push(this.addFile(t));return r},t.prototype._addFilesFromItems=function(e){var t,i,n,r,o;for(o=[],n=0,r=e.length;r>n;n++)i=e[n],o.push(null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?this.addFile(i.getAsFile()):t.isDirectory?this._addFilesFromDirectory(t,t.name):void 0:null!=i.getAsFile&&(null==i.kind||"file"===i.kind)?this.addFile(i.getAsFile()):void 0);return o},t.prototype._addFilesFromDirectory=function(e,t){var i,n,r;return i=e.createReader(),r=this,n=function(e){var i,n,o;for(n=0,o=e.length;o>n;n++)i=e[n],i.isFile?i.file(function(e){return r.options.ignoreHiddenFiles&&"."===e.name.substring(0,1)?void 0:(e.fullPath=t+"/"+e.name,r.addFile(e))}):i.isDirectory&&r._addFilesFromDirectory(i,t+"/"+i.name)},i.readEntries(n,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},t.prototype.accept=function(e,i){return e.size>2024*this.options.maxFilesize*2024?i(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/2024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):t.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,i):i(this.options.dictInvalidFileType)},t.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=t.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,(i=this,function(t){return t?(e.accepted=!1,i._errorProcessing([e],t)):(e.accepted=!0,i.options.autoQueue&&i.enqueueFile(e)),i._updateMaxFilesReachedClass()}));var i},t.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)t=e[i],this.enqueueFile(t);return null},t.prototype.enqueueFile=function(e){if(e.status!==t.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");return e.status=t.QUEUED,this.options.autoProcessQueue?setTimeout((i=this,function(){return i.processQueue()}),0):void 0;var i},t.prototype._thumbnailQueue=[],t.prototype._processingThumbnail=!1,t.prototype._enqueueThumbnail=function(e){return this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(e),setTimeout((t=this,function(){return t._processThumbnailQueue()}),0)):void 0;var t},t.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),(e=this,function(){return e._processingThumbnail=!1,e._processThumbnailQueue()})));var e},t.prototype.removeFile=function(e){return e.status===t.UPLOADING&&this.cancelUpload(e),this.files=u(this.files,e),this.emit("removedfile",e),0===this.files.length?this.emit("reset"):void 0},t.prototype.removeAllFiles=function(e){var i,n,r,o;for(null==e&&(e=!1),n=0,r=(o=this.files.slice()).length;r>n;n++)i=o[n],(i.status!==t.UPLOADING||e)&&this.removeFile(i);return null},t.prototype.createThumbnail=function(e,t){var i,n;return(i=new FileReader).onload=(n=this,function(){var r;return(r=document.createElement("img")).onload=function(){var i,o,s,a,u,p,d,c;return e.width=r.width,e.height=r.height,null==(s=n.options.resize.call(n,e)).trgWidth&&(s.trgWidth=s.optWidth),null==s.trgHeight&&(s.trgHeight=s.optHeight),o=(i=document.createElement("canvas")).getContext("2d"),i.width=s.trgWidth,i.height=s.trgHeight,l(o,r,null!=(u=s.srcX)?u:0,null!=(p=s.srcY)?p:0,s.srcWidth,s.srcHeight,null!=(d=s.trgX)?d:0,null!=(c=s.trgY)?c:0,s.trgWidth,s.trgHeight),a=i.toDataURL("image/png"),n.emit("thumbnail",e,a),null!=t?t():void 0},r.src=i.result}),i.readAsDataURL(e)},t.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,e=i=this.getUploadingFiles().length,!(i>=t)&&(n=this.getQueuedFiles()).length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;t>e;){if(!n.length)return;this.processFile(n.shift()),e++}}},t.prototype.processFile=function(e){return this.processFiles([e])},t.prototype.processFiles=function(e){var i,n,r;for(n=0,r=e.length;r>n;n++)i=e[n],i.processing=!0,i.status=t.UPLOADING,this.emit("processing",i);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},t.prototype._getFilesWithXhr=function(e){var t;return function(){var i,n,r,o;for(o=[],i=0,n=(r=this.files).length;n>i;i++)t=r[i],t.xhr===e&&o.push(t);return o}.call(this)},t.prototype.cancelUpload=function(e){var i,n,r,o,s,l,a;if(e.status===t.UPLOADING){for(r=0,s=(n=this._getFilesWithXhr(e.xhr)).length;s>r;r++)i=n[r],i.status=t.CANCELED;for(e.xhr.abort(),o=0,l=n.length;l>o;o++)i=n[o],this.emit("canceled",i);this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else((a=e.status)===t.ADDED||a===t.QUEUED)&&(e.status=t.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));return this.options.autoProcessQueue?this.processQueue():void 0},t.prototype.uploadFile=function(e){return this.uploadFiles([e])},t.prototype.uploadFiles=function(e){var n,r,o,s,l,a,u,p,d,c,h,m,f,g,v,y,F,E,b,w,z,L,k,C,x,A,T,D,_,N,S,U,I,M;for(y=new XMLHttpRequest,F=0,z=e.length;z>F;F++)n=e[F],n.xhr=y;y.open(this.options.method,this.options.url,!0),y.withCredentials=!!this.options.withCredentials,f=null,M=this,o=function(){var t,i,r;for(r=[],t=0,i=e.length;i>t;t++)n=e[t],r.push(M._errorProcessing(e,f||M.options.dictResponseError.replace("{{statusCode}}",y.status),y));return r},I=this,g=function(t){var i,r,o,s,l,a,u,p,d;if(null!=t)for(r=100*t.loaded/t.total,o=0,a=e.length;a>o;o++)n=e[o],n.upload={progress:r,total:t.total,bytesSent:t.loaded};else{for(i=!0,r=100,s=0,u=e.length;u>s;s++)n=e[s],(100!==n.upload.progress||n.upload.bytesSent!==n.upload.total)&&(i=!1),n.upload.progress=r,n.upload.bytesSent=n.upload.total;if(i)return}for(d=[],l=0,p=e.length;p>l;l++)n=e[l],d.push(I.emit("uploadprogress",n,r,n.upload.bytesSent));return d},y.onload=(U=this,function(i){var n;if(e[0].status!==t.CANCELED&&4===y.readyState){if(f=y.responseText,y.getResponseHeader("content-type")&&~y.getResponseHeader("content-type").indexOf("application/json"))try{f=JSON.parse(f)}catch(e){i=e,f="Invalid JSON response from server."}return g(),200<=(n=y.status)&&300>n?U._finished(e,f,i):o()}}),y.onerror=function(){return e[0].status!==t.CANCELED?o():void 0},(null!=(A=y.upload)?A:y).onprogress=g,a={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&i(a,this.options.headers);for(s in a)l=a[s],y.setRequestHeader(s,l);if(r=new FormData,this.options.params){T=this.options.params;for(h in T)v=T[h],r.append(h,v)}for(E=0,L=e.length;L>E;E++)n=e[E],this.emit("sending",n,y,r);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,y,r),"FORM"===this.element.tagName)for(D=this.element.querySelectorAll("input, textarea, select, button"),b=0,k=D.length;k>b;b++)if(p=D[b],d=p.getAttribute("name"),c=p.getAttribute("type"),"SELECT"===p.tagName&&p.hasAttribute("multiple"))for(_=p.options,w=0,C=_.length;C>w;w++)m=_[w],m.selected&&r.append(d,m.value);else(!c||"checkbox"!==(N=c.toLowerCase())&&"radio"!==N||p.checked)&&r.append(d,p.value);for(u=x=0,S=e.length-1;S>=0?S>=x:x>=S;u=S>=0?++x:--x)r.append(this._getParamName(u),e[u],e[u].name);return y.send(r)},t.prototype._finished=function(e,i,n){var r,o,s;for(o=0,s=e.length;s>o;o++)r=e[o],r.status=t.SUCCESS,this.emit("success",r,i,n),this.emit("complete",r);return this.options.uploadMultiple&&(this.emit("successmultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},t.prototype._errorProcessing=function(e,i,n){var r,o,s;for(o=0,s=e.length;s>o;o++)r=e[o],r.status=t.ERROR,this.emit("error",r,i,n),this.emit("complete",r);return this.options.uploadMultiple&&(this.emit("errormultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},t}()).version="3.10.2",t.options={},t.optionsForElement=function(e){return e.getAttribute("id")?t.options[r(e.getAttribute("id"))]:void 0},t.instances=[],t.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},t.autoDiscover=!0,t.discover=function(){var e,i,n,r,o,s;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],(e=function(e){var t,i,r,o;for(o=[],i=0,r=e.length;r>i;i++)t=e[i],o.push(/(^| )dropzone($| )/.test(t.className)?n.push(t):void 0);return o})(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),s=[],r=0,o=n.length;o>r;r++)i=n[r],s.push(!1!==t.optionsForElement(i)?new t(i):void 0);return s},t.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],t.isBrowserSupported=function(){var e,i,n,r,o;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(o=t.blacklistedBrowsers,n=0,r=o.length;r>n;n++)i=o[n],i.test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},u=function(e,t){var i,n,r,o;for(o=[],n=0,r=e.length;r>n;n++)i=e[n],i!==t&&o.push(i);return o},r=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},t.createElement=function(e){var t;return(t=document.createElement("div")).innerHTML=e,t.childNodes[0]},t.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},t.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},t.getElements=function(e,t){var i,n,r,o,s,l,a;if(e instanceof Array){n=[];try{for(r=0,s=e.length;s>r;r++)i=e[r],n.push(this.getElement(i,t))}catch(e){e,n=null}}else if("string"==typeof e)for(n=[],a=document.querySelectorAll(e),o=0,l=a.length;l>o;o++)i=a[o],n.push(i);else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},t.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},t.isValidFile=function(e,t){var i,n,r,o,s;if(!t)return!0;for(t=t.split(","),i=(n=e.type).replace(/\/.*$/,""),o=0,s=t.length;s>o;o++)if(r=t[o],r=r.trim(),"."===r.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(r.toLowerCase(),e.name.length-r.length))return!0}else if(/\/\*$/.test(r)){if(i===r.replace(/\/.*$/,""))return!0}else if(n===r)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new t(this,e)})}),void 0!==i&&null!==i?i.exports=t:window.Dropzone=t,t.ADDED="added",t.QUEUED="queued",t.ACCEPTED=t.QUEUED,t.UPLOADING="uploading",t.PROCESSING=t.UPLOADING,t.CANCELED="canceled",t.ERROR="error",t.SUCCESS="success",s=function(e){var t,i,n,r,o,s,l,a,u;for(e.naturalWidth,s=e.naturalHeight,(i=document.createElement("canvas")).width=1,i.height=s,(n=i.getContext("2d")).drawImage(e,0,0),r=n.getImageData(0,0,1,s).data,u=0,o=s,l=s;l>u;)t=r[4*(l-1)+3],0===t?o=l:u=l,l=o+u>>1;return 0===(a=l/s)?1:a},l=function(e,t,i,n,r,o,l,a,u,p){var d;return d=s(t),e.drawImage(t,i,n,r,o,l,a,u,p/d)},o=function(e,t){var i,n,r,o,s,l,a,u,p;if(r=!1,p=!0,n=e.document,u=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",o=function(i){return"readystatechange"!==i.type||"complete"===n.readyState?(("load"===i.type?e:n)[a](l+i.type,o,!1),!r&&(r=!0)?t.call(e,i.type||i):void 0):void 0},s=function(){try{u.doScroll("left")}catch(e){return e,void setTimeout(s,50)}return o("poll")},"complete"!==n.readyState){if(n.createEventObject&&u.doScroll){try{p=!e.frameElement}catch(e){}p&&s()}return n[i](l+"DOMContentLoaded",o,!1),n[i](l+"readystatechange",o,!1),e[i](l+"load",o,!1)}},t._autoDiscoverFunction=function(){return t.autoDiscover?t.discover():void 0},o(window,t._autoDiscoverFunction)}).call(this)}),"object"==typeof exports?module.exports=e("dropzone"):"function"==typeof define&&define.amd?define([],function(){return e("dropzone")}):this.Dropzone=e("dropzone")}();