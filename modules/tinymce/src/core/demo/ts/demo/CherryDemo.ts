// import Delay from "tinymce/core/api/util/Delay";

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

declare let tinymce: any;

export default function () {
  const textarea = document.createElement('textarea');
  textarea.classList.add('tinymce');
  document.querySelector('#ephox-ui').appendChild(textarea);
  tinymce.init({
    selector: 'textarea.tinymce',
    height: 800,
    menubar: false,
    statusbar: true,
    init_instance_callback(editor) {
      // 在编辑器初始化后，将内容添加到编辑器中
      editor.setContent('<h2>o Page&nbsp;</h2>\n' +
        '<ul>\n' +
        '<li>ddd&nbsp;</li>\n' +
        '<li>dfd&nbsp;</li>\n' +
        '<li>dfdf</li>\n' +
        '<li>fdf&nbsp;</li>\n' +
        '</ul>\n' +
        '<div class="tox-clear-float">\n' +
        '<table style="border-collapse: collapse; width: 75%; background-color: #ffffff; border-color: #ced4d9;" border="2" cellpadding="8">\n' +
        '<tbody>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '<td style="width: 13.3436%;">&nbsp;</td>\n' +
        '</tr>\n' +
        '</tbody>\n' +
        '</table>\n' +
        '</div>\n' +
        '<p>&nbsp;</p>\n' +
        '<div class="tox-clear-float"><img style="width: 80%;" src="http://localhost:3000/uploads/blobid1677581996682.png" /></div>');
    },
    language: 'zh_CN', // 设置为简体中文
    // 设置常用字体
    font_formats: '微软雅黑="Microsoft YaHei", "Helvetica Neue", "PingFang SC", sans-serif;苹果苹方="PingFang SC", "Microsoft YaHei", sans-serif;宋体=simsun, serif;仿宋体=FangSong, serif;黑体=SimHei, sans-serif;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Comic Sans MS="Comic Sans MS", sans-serif;Courier New="courier new", courier;',
    // 配置可选择字体大小
    // font_size_style_values: '8px,10px,12px,14px,16px,18px,20px,24px,30px,32px',
    fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 24px 30px 32px',
    base_url: '../../../../js/cherry/',
    auto_focus: false,
    skip_focus: true,
    // toolbar: 'emoticons code',
    toolbar: 'fontselect fontsizeselect formatselect ch-number-headings ' +
      '| bold italic underline strikethrough ' +
      '| ch-text-color ch-back-color removeformat ' +
      '| ch-alignment ch-right-indentation ch-left-indentation ch-lineheight ' +
      '| numlist bullist ch-checklist ' +
      '| ch-table image ch-video  ch-toc cherry-codeblock emoticons link' +
      '| ch-splitline blockquote ch-word' +
      '| fullscreen preview',
    // ::::///////////////表情配置 start
    emoticons_database_url: '/src/plugins/emoticons/main/js/emojis.js',
    emoticons_append: {
      brain_explode: {
        keywords: [ 'brain', 'explode', 'blown' ],
        char: '\ud83e\udd2f'
      }
    },
    // ::::///////////////表情配置 end
    plugins: [
      'quickbars',
      'link',
      'image',
      'imagetools',
      'lists',
      'advlist',
      'table',
      'fullscreen',
      'paste',
      'anchor',
      'media',
      'advlist',
      'cherry-draw.io',
      'cherry-mindmap',
      'cherry-app',
      'emoticons',
      'cherry-alignment',
      'cherry-blockquotefix',
      'cherry-floatbar-extand',
      'cherry-lineheight',
      'cherry-word',
      'preview',
      // 'cherry-video',
      'cherry-splitline',
      'cherry-number-headings',
      'cherry-indentation',
      'cherry-colorpicker',
      'cherry-checklist',
      'cherry-panel',
      'cherry-tencent-docs',
      'cherry-table',
      'cherry-code',
      'cherry-toc',
      'cherry-codeblock',
    ],
    toolbar_mode: 'floating',
    quickbars_insert_toolbar: false,
    table_toolbar: 'mytableprops tabledelete | tablemergecells tablesplitcells | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
    // panelblock_toolbar: 'cherry-panel__tips cherry-panel__info cherry-panel__ok cherry-panel__warning cherry-panel__error | cherry-panel__delete',
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
    valid_children: '+pre[ol],+a[i|#text],+body[style]',
    block_formats: 'Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Paragraph=p',
    body_class: 'cherry-editor-content',
    // :::: image upload setting start
    images_upload_url: 'http://localhost:3000/api/upload',
    automatic_uploads: true,
    images_upload_credentials: false,
    file_picker_types: 'file image media',
    // media_live_embeds: true,
    images_upload_handler: (blobInfo, success, failure, progress) => {
      let xhr, formData;
      // eslint-disable-next-line prefer-const
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'http://localhost:3000/api/upload');
      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };
      xhr.onload = function (res) {
        const json = JSON.parse(xhr.responseText);
        success(json.url);
      };
      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };
      // eslint-disable-next-line prefer-const
      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    file_picker_callback(callback, _value, meta) {
      // 上传视频
      // if (meta.filetype === 'media') {
      //   const input = document.createElement('input');
      //   input.setAttribute('type', 'file');
      //   input.setAttribute('accept', 'video/*');
      //   input.onchange = function () {
      //     const file = this.files[0];
      //     const reader = new FileReader();
      //     reader.onload = function (e) {
      //       const id = 'blobid' + (new Date()).getTime();
      //       const blobCache = tinymce.activeEditor.editorUpload.blobCache;
      //       const base64 = reader.result;
      //       const blobInfo = blobCache.create(id, file, base64);
      //       blobCache.add(blobInfo);
      //       callback(blobInfo.blobUri(), { title: file.name });
      //     };
      //     reader.readAsDataURL(file);
      //   };
      //   input.click();
      // }
      // 上传图片
      // Provide image and alt text for the image dialog
      if (meta.filetype === 'image') {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = function () {
          const file = this.files[0];
          const reader = new FileReader();
          reader.onload = function () {
            const id = 'blobid' + (new Date()).getTime();
            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = reader.result;
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            callback(blobInfo.blobUri(), { title: file.name });
          };
          reader.readAsDataURL(file);
        };
        input.click();
      }
      //
      // // Provide alternative source and posted for the media dialog
      // if (meta.filetype === 'media') {
      //   callback('movie.mp4', { embed: '<p>test</p>' });
      // }
    },
    // image_advtab: true,
    // :::: image upload setting start
    setup(ed) {

    },
  });

  document.getElementById('save').addEventListener('click',(e) => {
    console.log(tinymce.activeEditor.getContent());
  });



};
