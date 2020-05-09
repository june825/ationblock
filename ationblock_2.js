//에이션블록 2는 GPL 3.0 라이센스를 따릅니다 :)
//에이션블록 2부터 thoratica님의 Entblock 2를 참고합니다 :)

const LibraryCreator = {
    start: (blocksJSON, category, text) => {
        let blockArray = new Array
        // LibraryCreator 가져오기
        Entry.staticBlocks = [
            {
                category: 'start',
                blocks: [
                    'when_run_button_click',
                    'when_some_key_pressed',
                    'mouse_clicked',
                    'mouse_click_cancled',
                    'when_object_click',
                    'when_object_click_canceled',
                    'when_message_cast',
                    'message_cast',
                    'message_cast_wait',
                    'when_scene_start',
                    'start_scene',
                    'start_neighbor_scene',
                    'check_object_property',
                    'check_block_execution',
                    'switch_scope',
                    'is_answer_submited',
                    'check_lecture_goal',
                    'check_variable_by_name',
                    'show_prompt',
                    'check_goal_success',
                    'positive_number',
                    'negative_number',
                    'wildcard_string',
                    'wildcard_boolean',
                    'register_score',
                ],
            },
            {
                category: 'flow',
                blocks: [
                    'wait_second',
                    'repeat_basic',
                    'repeat_inf',
                    'repeat_while_true',
                    'stop_repeat',
                    '_if',
                    'if_else',
                    'wait_until_true',
                    'stop_object',
                    'restart_project',
                    'when_clone_start',
                    'create_clone',
                    'delete_clone',
                    'remove_all_clones',
                ],
            },
            {
                category: 'moving',
                blocks: [
                    'move_direction',
                    'bounce_wall',
                    'move_x',
                    'move_y',
                    'move_xy_time',
                    'locate_x',
                    'locate_y',
                    'locate_xy',
                    'locate_xy_time',
                    'locate',
                    'locate_object_time',
                    'rotate_relative',
                    'direction_relative',
                    'rotate_by_time',
                    'direction_relative_duration',
                    'rotate_absolute',
                    'direction_absolute',
                    'see_angle_object',
                    'move_to_angle',
                ],
            },
            {
                category: 'looks',
                blocks: [
                    'show',
                    'hide',
                    'dialog_time',
                    'dialog',
                    'remove_dialog',
                    'change_to_some_shape',
                    'change_to_next_shape',
                    'add_effect_amount',
                    'change_effect_amount',
                    'erase_all_effects',
                    'change_scale_size',
                    'set_scale_size',
                    'flip_x',
                    'flip_y',
                    'change_object_index',
                ],
            },
            {
                category: 'brush',
                blocks: [
                    'brush_stamp',
                    'start_drawing',
                    'stop_drawing',
                    'set_color',
                    'set_random_color',
                    'change_thickness',
                    'set_thickness',
                    'change_brush_transparency',
                    'set_brush_tranparency',
                    'brush_erase_all',
                ],
            },
            {
                category: 'text',
                blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
            },
            {
                category: 'sound',
                blocks: [
                    'sound_something_with_block',
                    'sound_something_second_with_block',
                    'sound_from_to',
                    'sound_something_wait_with_block',
                    'sound_something_second_wait_with_block',
                    'sound_from_to_and_wait',
                    'sound_volume_change',
                    'sound_volume_set',
                    'sound_silent_all',
                ],
            },
            {
                category: 'judgement',
                blocks: [
                    'is_clicked',
                    'is_press_some_key',
                    'reach_something',
                    'boolean_basic_operator',
                    'boolean_and_or',
                    'boolean_not',
                ],
            },
            {
                category: 'calc',
                blocks: [
                    'calc_basic',
                    'calc_rand',
                    'coordinate_mouse',
                    'coordinate_object',
                    'get_sound_volume',
                    'quotient_and_mod',
                    'calc_operation',
                    'get_project_timer_value',
                    'choose_project_timer_action',
                    'set_visible_project_timer',
                    'get_date',
                    'distance_something',
                    'get_sound_duration',
                    'get_user_name',
                    'length_of_string',
                    'combine_something',
                    'char_at',
                    'substring',
                    'index_of_string',
                    'replace_string',
                    'change_string_case',
                ],
            },
            {
                category: 'variable',
                blocks: [
                    'variableAddButton',
                    'listAddButton',
                    'ask_and_wait',
                    'get_canvas_input_value',
                    'set_visible_answer',
                    'get_variable',
                    'change_variable',
                    'set_variable',
                    'show_variable',
                    'hide_variable',
                    'value_of_index_from_list',
                    'add_value_to_list',
                    'remove_value_from_list',
                    'insert_value_to_list',
                    'change_value_list_index',
                    'length_of_list',
                    'is_included_in_list',
                    'show_list',
                    'hide_list',
                ],
            },
            {
                category: 'func',
                blocks: ['functionAddButton'],
            },
            {
                category: 'analysis',
                blocks: [
                    'analizyDataAddButton',
                    'append_row_to_table',
                    'insert_row_to_table',
                    'delete_row_from_table',
                    'set_value_from_table',
                    'get_table_count',
                    'get_value_from_table',
                    'calc_values_from_table',
                    'open_table_chart',
                    'close_table_chart',
                ],
            },
            {
                category: 'ai_utilize',
                blocks: [
                    'aiUtilizeBlockAddButton',
                    'aiUtilizeModelTrainButton',
                    'audio_title',
                    'check_microphone',
                    'speech_to_text_convert',
                    'speech_to_text_get_value',
                    'get_microphone_volume',
                    'tts_title',
                    'read_text',
                    'read_text_wait_with_block',
                    'set_tts_property',
                    'translate_title',
                    'get_translated_string',
                    'check_language',
                    'video_title',
                    'video_draw_webcam',
                    'video_check_webcam',
                    'video_flip_camera',
                    'video_set_camera_opacity_option',
                    'video_motion_value',
                    'video_toggle_model',
                    'video_is_model_loaded',
                    'video_number_detect',
                    'video_toggle_ind',
                    'video_body_part_coord',
                    'video_face_part_coord',
                    'video_detected_face_info',
                ],
            },
            {
                category: 'expansion',
                blocks: [
                    'expansionBlockAddButton',
                    'weather_title',
                    'check_weather',
                    'check_finedust',
                    'get_weather_data',
                    'get_current_weather_data',
                    'get_today_temperature',
                    'check_city_weather',
                    'check_city_finedust',
                    'get_city_weather_data',
                    'get_current_city_weather_data',
                    'get_today_city_temperature',
                    'festival_title',
                    'count_festival',
                    'get_festival_info',
                    'behaviorConductDisaster_title',
                    'count_disaster_behavior',
                    'get_disaster_behavior',
                    'behaviorConductLifeSafety_title',
                    'count_lifeSafety_behavior',
                    'get_lifeSafety_behavior',
                ],
            },
            {
                category: 'arduino',
                blocks: [
                    'arduino_reconnect',
                    'arduino_open',
                    'arduino_cloud_pc_open',
                    'arduino_connect',
                    'arduino_download_connector',
                    'download_guide',
                    'arduino_download_source',
                    'arduino_noti',
                ].concat(EntryStatic.DynamicHardwareBlocks),
            }
        ];
        EntryStatic.getAllBlocks = () => {
            return Entry.staticBlocks;
        }
        function updateCategory(category, options) {
            Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                { category: 'start', visible: true },
                { category: 'flow', visible: true },
                { category: 'moving', visible: true },
                { category: 'looks', visible: true },
                { category: 'brush', visible: true },
                { category: 'text', visible: true },
                { category: 'sound', visible: true },
                { category: 'judgement', visible: true },
                { category: 'calc', visible: true },
                { category: 'variable', visible: true },
                { category: 'func', visible: true },
                { category: 'analysis', visible: true },
                { category: 'ai_utilize', visible: true },
                { category: 'expansion', visible: true },
                { category: 'arduino', visible: true },
                { category: category, visible: true },
            ]);
            for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                    $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
                }
            }
            Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
            Entry.playground.blockMenu._generateCategoryCode(category);
            if (options) {
                if (options.background) {
                    $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
                    $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
                    if (options.backgroundSize) {
                        $(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
                    }
                }
                if (options.name) {
                    $(`#entryCategory${category}`)[0].innerText = options.name
                }
            }
        }
        function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
            Entry.block[blockname] = {
                color: color.color,
                fontColor: color.font,
                outerLine: color.outline,
                skeleton: skeleton,
                statement: [],
                params: params.params,
                events: {},
                def: {
                    params: params.define,
                    type: blockname
                },
                paramsKeyMap: params.map,
                class: _class ? _class : 'default',
                func: func,
                template: template
            }
        }
        // 블록 추가하기
        for (let i in blocksJSON) {
            let block = blocksJSON[i]
            blockArray.push(block.name)
            addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton)
        }
        // 블록 반영
        Entry.staticBlocks.push({ category: category, blocks: blockArray })
        // 카테고리 업데이트 (ws에서만)
        if (typeof useWebGL == "undefined") {
            updateCategory(category)
            // 아이콘 적용
            $('head').append(`<style>#entryCategory${category}{background-image:url(/lib/entry-js/images/variable.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/variable_on.svg);background-color:#cc419b; border-color:#cc419b;color:#fff}</style>`)
            // 카테고리 이름 적용
            $(`#entryCategory${category}`).append(text)
        }
        console.log('%c에이션블록. 위대한 블록.', 'background-color: #007bff; color: #e9ecef; padding: .7rem; font-family: sans-serif; font-size: .9rem; border-radius: 99999rem;')
        console.log('%c에이션블록은 EntBlock 2.1을 기반으로 하여\nGPL 3.0 라이센스를 따릅니다 :)', 'font-family: sans-serif; font-size: .7rem')
    }
}
let blockPOST

//여기서부터 블록 추가가 시작됩니다
///////////////////////////////////////////////////////////////
const blocks = [
    {
        name: 'text_button',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '버튼 제어',
                color: EntryStatic.colorSet.common.TEXT,
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'buttonclick'
    },
    /////////////////////////////////////////////////////////////////
    {
      name: 'button_click',
      template: '%1 버튼 클릭하기%2',
      skeleton: 'basic',
      color: {
         default: EntryStatic.colorSet.block.default.ANALYSIS
     },
     params: [
         {
             type: 'Dropdown',
             options: [
               ["정지", "stop"],
               // ["일시정지", "pause"],
               ["전체화면", "fullscreen"] //일시정지 기능 제거. Error 수정 후 추가 예정
             ],
             value: "stop"
         },
         {
            type: 'Indicator',
            img: 'block_icon/block_analysis.svg',
            size: 11,
         }
     ],
     def: [
         null
     ],
     map: {
         VALUE: 0
     },
     class: 'buttonclick',
     func: async (sprite, script) => {
         let value = script.getValue("VALUE", script);
         if (value == "stop") {
           Entry.engine.toggleStop()
         // } else if (value == "pause") {
         //   Entry.engine.togglePause()
         } else if (value == "fullscreen") {
           Entry.engine.toggleFullScreen()
         }
      }
    },

      //////////////////////////////////////////////////////////////////////////////


      {
          name: 'text_alertpromptconfirm',
          template: '%1',
          skeleton: 'basic_text',
          color: {
              default: EntryStatic.colorSet.common.TRANSPARENT
          },
          params: [
              {
                  type: 'Text',
                  text: '알림창',
                  color: EntryStatic.colorSet.common.TEXT,
                  align: 'center'
              }
          ],
          def: [],
          map: {},
          class: 'alertpromptconfirm'
      },

      //////////////////////////////////////////////////////////////////////

      {
        name: 'alert',
        template: '%1내용의 알림창 띄우기%2',
        skeleton: 'basic',
        color: {
           default: EntryStatic.colorSet.block.default.ANALYSIS
       },
       params: [
           {
               type: 'Block',
               accept: 'string'
           },
           {
              type: 'Indicator',
              img: 'block_icon/block_analysis.svg',
              size: 11
           }
       ],
       def: [
           {
             type: 'text',
             params: ["엔트리"]
           }
       ],
       map: {
           VALUE: 0
       },
       class: 'alertpromptconfirm',
       func: async (sprite, script) => {
           alert(script.getValue('VALUE', script));
        },




    },

    {
      name: 'prompt',
      template: '%1입력창의 값',
      skeleton: 'basic_string_field',
      color: {
         default: EntryStatic.colorSet.block.default.CALC
     },
     params: [
         {
             type: 'Block',
             accept: 'string'
         }
     ],
     def: [
         {
           type: 'text',
           params: ["엔트리"]
         }
     ],
     map: {
         VALUE: 0
     },
     class: 'alertpromptconfirm',
     func: async (sprite, script) => {
         return prompt(script.getValue("VALUE", script));
      }
    },

    {
      name: 'confirm',
      template: '%1선택창에서 확인 버튼을 눌렀는가?',
      skeleton: 'basic_boolean_field',
      color: {
         default: EntryStatic.colorSet.block.default.JUDGE
     },
     params: [
         {
             type: 'Block',
             accept: 'string'
         }
     ],
     def: [
         {
           type: 'text',
           params: ["엔트리"]
         }
     ],
     map: {
         VALUE: 0
     },
     class: 'alertpromptconfirm',
     func: async (sprite, script) => {
         if (confirm(script.getValue("VALUE", script)) == true) {
           return true;
         } else {
           return false;
         }
      }
    },

    //컴퓨터 정보

    {
      name: "text_computerinfo",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '컴퓨터 정보',
          color: EntryStatic.colorSet.common.TEXT,
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "computerinfo"
    },

    {
      name: "browser",
      template: "브라우저가 %1인가?",
      skeleton: "basic_boolean_field",
      color: {
        default: EntryStatic.colorSet.block.default.JUDGE
      },
      params: [
        {
          type: "Dropdown",
          options: [
            ["크롬", 'chrome'],
            ["인터넷 익스플로러", 'ie'],
            ["파이어폭스", 'firefox'],
            ["사파리", 'safari'],
            ["크로미움 기반 [베타]", 'chro']
          ],
          value: 'chrome'
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "computerinfo",
      func: async(sprite, script) => {
        let value = script.getValue("VALUE", script);
        let browser = navigator.userAgent.toLowerCase();

        if (browser.indexOf("chrome") != -1 && value == "chrome") {
          return true
        } else if (browser.indexOf("msie") != -1 && value == "msie") {
          return true
        } else if (browser.indexOf("firefox") != -1 && value == "firefox") {
          return true
        } else if (browser.indexOf("safari") != -1 && value == "safari") {
          return true
        } else if (browser.indexOf("chrome") != -1 && value == "chro") {
          return true
        } else {
          return false
        }

      }
    },

    //외부 사이트
    {
      name: "text_newpage",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT
      },
      params: [
        {
          type: 'Text',
          text: '외부 사이트',
          color: EntryStatic.colorSet.common.TEXT,
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "site"
    },

    {
      name: 'mypage',
      template: '%1유저의 마이페이지로 이동하기 %2',
      skeleton: 'basic',
      color: {
         default: EntryStatic.colorSet.block.default.ANALYSIS
     },
     params: [
         {
             type: 'Block',
             accept: "string",
             value: "ation"
         },
         {
            type: 'Indicator',
            img: 'block_icon/block_analysis.svg',
            size: 11,
         }
     ],
     def: [],
     map: {
         VALUE: 0
     },
     class: 'site',
     func: async (sprite, script) => {
         win = window.open(script.getValue("VALUE", script))
      }
    },

    {
      name: 'newtab',
      template: '엔트리의 %1 페이지 열기 %2',
      skeleton: 'basic',
      color: {
         default: EntryStatic.colorSet.block.default.ANALYSIS
     },
     params: [
         {
             type: "Dropdown",
             options: [
               ["학습하기", "teacher"],
               ["교과서 학습하기", "schoolteacher"],
               ["작품 만들기", "create"],
               ["작품 공유하기", "share"],
               ["글 나누기", "post"],
               ["엔트리 메인페이지", "main"],
               ["엔트리 소개 페이지", 'introduce'],
               ["오픈 강의", 'openteacher'],
               ["다운로드", 'download']
             ],
             value: "teacher"
         },
         {
            type: 'Indicator',
            img: 'block_icon/block_analysis.svg',
            size: 11,
         }
     ],
     def: [null],
     map: {
         VALUE: 0
     },
     class: 'site',
     func: async (sprite, script) => {
        const value = script.getValue('VALUE', script);
        if (value == "teacher") {
          win = window.open("https://playentry.org/tt");
        } else if (value == "schoolteacher") {
          win = window.open("https://playentry.org/study/basic/textbook#!");
        } else if (value == "create") {
          win = window.open("https://playentry.org/ws");
        } else if (value == "share") {
          win = window.open("https://playentry.org/all");
        } else if (value == "post") {
          win = window.open("https://playentry.org/ds");
        } else if (value == "main") {
          win = window.open("https://playentry.org");
        } else if (value == "introduce") {
          win = window.open("https://playentry.org/#!/about");
        } else if (value == "openteacher") {
          win = window.open("https://playentry.org/tt#!/custom/lecture/list?sort=updated&rows=12&page=1");
        } else if (value == "download") {
          win = window.open("https://playentry.org/#!/offlineEditor");
        }
        alert("새 탭이 열렸습니다.");
      }
    },

    {
      name: "search",
      template: "%1을 %2에 검색하기 %3",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "엔트리"
        },
        {
          type: "Dropdown",
          options: [
            ["구글", "google"],
            ["네이버", "naver"],
            ["유튜브", "youtube"]
          ],
          value: "google"
        },
        {
          type: "Indicator",
          img: 'block_icon/block_analysis.svg',
          size: "11"
        }
      ],
      def: [],
      map: {
        LEFTHAND: 0,
        RIGHTHAND: 1
      },
      class: "site",
      func: async(sprite, script) => {
        let word = script.getValue("LEFTHAND", script);
        let search = script.getValue("RIGHTHAND", script);

        if (search == "google") {
          window.open("https://www.google.com/search?client=opera&q=" + word + "&sourceid=opera&ie=UTF-8&oe=UTF-8")
        } else if (search == "naver") {
          window.open("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + word)
        } else if (search == "youtube") {
          window.open("https://www.youtube.com/results?search_query=" + word)
        }

        alert("새 창이 열렸습니다.")
      }
    },

    //콘솔
    {
      name: "text_console",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '콘솔',
          color: EntryStatic.colorSet.common.TEXT,
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "console"
    },


    {
      name: "consolelog",
      template: "%1내용을 %2에 기록하기 %3",
      skeleton: "basic",
      color: {
         default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "엔트리"
        },
        {
          type: "Dropdown",
          options: [
            ["엔트리 콘솔", "console"],
            ["브라우저 콘솔", "browser"]
          ],
          value: "console"
        },
        {
          type: 'Indicator',
          img: 'block_icon/block_analysis.svg',
          size: 11
        }
      ],
      def: [],
      map: {
        LEFTHAND: 0,
        RIGHTHAND: 1
      },
      class: "console",
      func: async(sprite, script) => {
        if (script.getValue("RIGHTHAND", script) == "console") {
          Entry.console.print(script.getValue("LEFTHAND", script));
        } else if (script.getValue("RIGHTHAND", script) == "browser") {
          console.log(script.getValue("LEFTHAND", script));
        }
      }

    },


    {
      name: "clearconsole",
      template: "%1 모두 지우기 %2",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Dropdown",
          options: [
            ["엔트리 콘솔", "console"],
            ["브라우저 콘솔", "browser"]
          ],
          value: "console"
        },
        {
          type: 'Indicator',
          img: 'block_icon/block_analysis.svg',
          size: 11
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "console",
      func: async(sprite, script) => {
        if (script.getValue("VALUE", script) == "console") {
          Entry.console.clear()
        } else if (script.getValue("VALUE", script) == "browser") {
          console.clear()
        }
      }

    },


    //커뮤니티 글
    {
      name: "text_posting",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT
      },
      params: [
        {
          type: 'Text',
          text: '엔트리 커뮤니티',
          color: EntryStatic.colorSet.common.TEXT,
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "posting"
    },

    {
      name: "posting",
      template: "제목%1내용%2의 글을 커뮤니티의 %3 카테고리에 올리기 %4",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "엔트리"
        },
        {
          type: "Block",
          accept: "string",
          value: "좋아"
        },
        {
          type: "Dropdown",
          options: [
            ["묻고답하기", 'qna'],
            ["노하우&팁", 'tips'],
            ["엔트리 이야기", "free"]
          ],
          value: "free"
        },
        {
          type: "Indicator",
          img: "block_icon/block_analysis.svg",
          size: "11"
        }
      ],
      def: [],
      map: {
        TITLE: 0,
        CONTENT: 1,
        TYPE: 2
      },
      class: "posting",
      func: async(sprite, script) => {

        //게시판 종류 정하기
        if (script.getValue("TYPE", script) == "qna") {
          var koreantype = "묻고답하기"
        } else if (script.getValue("TYPE", script) == "tips") {
          var koreantype = "노하우&팁"
        } else if (script.getValue("TYPE", script) == "free") {
          var koreantype = "엔트리 이야기"
        }

        //묻고 답이 true면 fetch로 글 올리기
        if (confirm("이 작품이 " + koreantype + " 게시판에 글을 올리는 것을 허용하시겠습니까?") == true) {
            fetch('https://playentry.org/api/discuss/', {
                method: 'POST',
                body: `{ "images": [], "category": "${script.getValue('TYPE', script)}", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return script.callReturn()
        } else {
          return false
        }

      } //async 끝 중괄호
    },



    //// 기타 카테고리
    {
      name: "others",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '기타',
          color: EntryStatic.colorSet.common.TEXT,
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "other"
    },

    {
      name: 'javascript',
      template: '%1자바스크립트 코드 실행 %2',
      skeleton: 'basic',
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "alert('엔트리')"
        },
        {
          type: "Indicator",
          img: 'block_icon/block_analysis.svg',
          size: '11'
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "other",
      func: async(sprite, script) => {
        if (confirm("자바스크립트 코드를 실행하시겠습니까?\n\n코드: " + script.getValue("VALUE", script)) == true) {
          eval(script.getValue("VALUE", script))
        }
      }
    },

    { //이 코드는 thoratica님의 기타블록 코드를 참고하였습니다
    name: 'toast',
    template: '%1 제목과 %2 내용의 %3 토스트를 %4 출력하기%5',
    skeleton: 'basic',
    color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
    },
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Dropdown',
            options: [
                ['성공', 'success'],
                ['경고', 'warning'],
                ['오류', 'alert']
            ],
            value: 'success'
        },
        {
            type: 'Dropdown',
            options: [
                ['잠시 뒤 사라지게', 'false'],
                ['유지되게', 'true']
            ],
            value: 'false'
        },
        {
            type: 'Indicator',
            img: 'block_icon/block_analysis.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`엔트리`]
        },
        {
            type: 'text',
            params: [`좋아`]
        },
        null,
        null,
        null
    ],
    map: {
        TITLE: 0,
        CONTENT: 1,
        TYPE: 2,
        HIDE: 3
    },
    class: 'other',
    func: async (sprite, script) => {
        let hide
        if (script.getValue('HIDE', script) == 'true') {
            hide = true
        } else {
            hide = false
        }
        eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
        return script.callReturn()
    }
  },

  {
    name: "boostmode",
    template: "부스트모드가 켜져 있는가?",
    skeleton: "basic_boolean_field",
    color: {
      default: EntryStatic.colorSet.block.default.JUDGE
    },
    params: [],
    def: [],
    map: {},
    class: "other",
    func: async(sprite, script) => {
      (typeof useWebGL == 'undefined') ? false : useWebGL == true ? true : false //이 코드는 thoratica님의 코드를 참고하였습니다
    }
  }

]

//블록추가 끝

LibraryCreator.start(blocks, 'API', '에이션블록') //원하는 이름을 입력하세요 :)

if (window.location.href.indexOf("playentry.org/ws")!= -1) {
  win = window.open("https://ationblock2.netlify.app");
}
