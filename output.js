//Wed Oct 23 2024 14:45:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let scriptVersion = "v1.1",
  update_tines = "2023-05-20",
  update_data = "2023-05-20",
  versionupdate = "0",
  scriptVersionLatest = "v1.1",
  userCookie = ($.isNode() ? process.env.lekebo_xmxs_Cookie : $.getdata("lekebo_xmxs_Cookie")) || "",
  userList = [],
  userIdx = 0,
  userCount = 0,
  timestamp = Math.round(new Date().getTime()).toString(),
  host = "api-gw.kureader.com",
  hostname = "https://" + host;
async function start() {
  taskall = [];
  for (let _0xacd812 of userList) {
    taskall.push(await _0xacd812.getMemberScore(2 * 1000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行账号签到赚钱 ================");
  taskall = [];
  for (let _0x4e5b32 of userList) {
    taskall.push(await _0x4e5b32.signin(2 * 1000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行打开宝箱赚钱 ================");
  taskall = [];
  for (let _0x195b04 of userList) {
    taskall.push(await _0x195b04.treasure(2 * 1000));
    taskall.push(await _0x195b04.treasure_video(2 * 1000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行看小视频赚金 ================");
  taskall = [];
  for (let _0x177994 of userList) {
    taskall.push(await _0x177994.task(22, "task", "看小视频", 2 * 1000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行游览逛街赚金 ================");
  taskall = [];
  for (let _0x509ccc of userList) {
    taskall.push(await _0x509ccc.task(113, "task", "游览逛街", 2 * 1000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行幸运转盘赚金 ================");
  taskall = [];
  for (let _0x30b8f5 of userList) {
    taskall.push(await _0x30b8f5.task(24, "task", "幸运转盘", 2 * 1000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
}
class UserInfo {
  constructor(_0x1017e1) {
    this.index = ++userIdx;
    this.ck = _0x1017e1.split("&");
  }
  async ["getMemberScore"](_0x387170 = 2000) {
    return new Promise(_0x48567f => {
      let _0x422397 = {
        "url": hostname + "/welf/h5/v1/task-list",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "151"
        },
        "body": "{\"module_sign\":[{\"category\":\"new_user\",\"sign\":\"4e6f894b47d8a2f929c50ccf209ef125\"},{\"category\":\"daily_task\",\"sign\":\"dd6fc9104e657f9d833bd2aab7881ff8\"}]}"
      };
      $.post(_0x422397, async (_0x3c990b, _0x276822, _0x1df577) => {
        try {
          if (_0x3c990b) {
            $.logErr(_0x3c990b);
          } else {
            let _0x238c72 = JSON.parse(_0x1df577);
            _0x238c72.sign_in.today_is_check_in == 1 ? DoubleLog("\n ✅ 【" + this.index + "】收益状况: 拥有:" + _0x238c72.user.coin_data + "金币，余额:" + _0x238c72.user.cash_data + "元") : DoubleLog("\n ❌ 【" + this.index + "】收益状况: " + _0x238c72.err_tips);
          }
        } catch (_0x104f14) {
          $.logErr(_0x104f14, _0x276822);
        } finally {
          _0x48567f();
        }
      }, _0x387170);
    });
  }
  async ["signin"](_0x5ec37f = 2000) {
    return new Promise(_0x22b65b => {
      let _0x2240cf = {
        "url": hostname + "/welf/h5/v1/task-list",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "151"
        },
        "body": "{\"module_sign\":[{\"category\":\"time_limit\",\"sign\":\"165eefc5e43d175ab1c4588cdd7e38a7\"},{\"category\":\"daily_task\",\"sign\":\"62266e7df0d9f1643ecd946241996965\"},{\"category\":\"recommend_task\",\"sign\":\"5654381f4cbb5811d027c5b4230d921e\"}],\"version\":\"1000\"}"
      };
      $.post(_0x2240cf, async (_0x2c8bcb, _0x54bc35, _0x4f50bf) => {
        try {
          if (_0x2c8bcb) $.logErr(_0x2c8bcb);else {
            let _0x3dff9b = JSON.parse(_0x4f50bf);
            if (_0x3dff9b.sign_in.today_is_check_in == 1) DoubleLog("\n ✅ 【" + this.index + "】签到信息: 今天已签到，已连续签到 " + _0x3dff9b.sign_in.continuity_check_in_days + " 天");else {
              DoubleLog("\n ❌ 【" + this.index + "】签到信息: " + _0x3dff9b.err_tips);
            }
          }
        } catch (_0x2bcd57) {
          $.logErr(_0x2bcd57, _0x54bc35);
        } finally {
          _0x22b65b();
        }
      }, _0x5ec37f);
    });
  }
  async ["treasure"](_0x205eb5 = 2000) {
    return new Promise(_0x5e2b65 => {
      let _0x188eaf = {
        "url": hostname + "/welf/h5/v1/task/treasure",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "151"
        }
      };
      $.get(_0x188eaf, async (_0x2cc92b, _0x19f605, _0x449ff3) => {
        try {
          if (_0x2cc92b) $.logErr(_0x2cc92b);else {
            let _0x22a6da = JSON.parse(_0x449ff3);
            _0x22a6da.last_receive_time > 0 ? DoubleLog("\n ❌ 【" + this.index + "】打开宝箱: 还剩 " + $.time("mm:ss", _0x22a6da.last_receive_time * 1000) + " 分钟可以开宝箱") : await this.open_treasure(2 * 1000);
          }
        } catch (_0x1a1c3d) {
          $.logErr(_0x1a1c3d, _0x19f605);
        } finally {
          _0x5e2b65();
        }
      }, _0x205eb5);
    });
  }
  async ["open_treasure"](_0x56881a = 2000) {
    return new Promise(_0xf94a20 => {
      let _0x106978 = {
        "url": hostname + "/welf/h5/v1/task/treasure/reward",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "151"
        },
        "body": "{\"t\": " + timestamp + "}"
      };
      $.post(_0x106978, async (_0x1adc3f, _0x23d1a1, _0x1b53a4) => {
        try {
          if (_0x1adc3f) $.logErr(_0x1adc3f);else {
            let _0x487563 = JSON.parse(_0x1b53a4);
            _0x487563.reward > 0 ? DoubleLog("\n ✅ 【" + this.index + "】打开宝箱: 获得 " + _0x487563.reward + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】打开宝箱: " + _0x487563.errors.title);
          }
        } catch (_0x4e2977) {
          $.logErr(_0x4e2977, _0x23d1a1);
        } finally {
          _0xf94a20();
        }
      }, _0x56881a);
    });
  }
  async ["treasure_video"](_0x181d4f = 2000) {
    return new Promise(_0x3ebfe1 => {
      let _0x3c7b10 = {
        "url": hostname + "/welf/h5/v1/task/treasure/video/reward",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "151"
        },
        "body": "{\"t\": " + timestamp + ",\"position\": \"welfare_treasurebox_timely\",\"video_prefix\": \"task_video_two\"}"
      };
      $.post(_0x3c7b10, async (_0x3c2fed, _0xeb0959, _0x59212b) => {
        try {
          if (_0x3c2fed) $.logErr(_0x3c2fed);else {
            let _0x40c9b1 = JSON.parse(_0x59212b);
            _0x40c9b1.reward > 0 ? DoubleLog("\n ✅ 【" + this.index + "】宝箱广告: 获得 " + _0x40c9b1.reward + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】宝箱广告: " + _0x40c9b1.errors.title);
          }
        } catch (_0x3836be) {
          $.logErr(_0x3836be, _0xeb0959);
        } finally {
          _0x3ebfe1();
        }
      }, _0x181d4f);
    });
  }
  async ["task"](_0x106f0d, _0x34e576, _0x1b0fd2, _0xf725f7 = 2000) {
    return new Promise(_0x432b85 => {
      let _0xa4119e = {
        "url": hostname + "/welf/h5/v1/task-list",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600"
        },
        "body": "{\"module_sign\":[{\"category\":\"time_limit\",\"sign\":\"165eefc5e43d175ab1c4588cdd7e38a7\"},{\"category\":\"daily_task\",\"sign\":\"62266e7df0d9f1643ecd946241996965\"},{\"category\":\"recommend_task\",\"sign\":\"5654381f4cbb5811d027c5b4230d921e\"}],\"version\":\"1000\"}"
      };
      $.post(_0xa4119e, async (_0x3306a3, _0x409abc, _0x196371) => {
        try {
          if (_0x3306a3) $.logErr(_0x3306a3);else {
            let _0x1f3a6e = JSON.parse(_0x196371);
            if (_0x1f3a6e.module && Array.isArray(_0x1f3a6e.module)) {
              for (let _0x29d90e = 0; _0x29d90e < _0x1f3a6e.module.length; _0x29d90e++) {
                let _0x59ddf1 = _0x1f3a6e.module[_0x29d90e];
                for (let _0x5c5d85 = 0; _0x5c5d85 < _0x59ddf1.task_list.length; _0x5c5d85++) {
                  let _0x50a9d4 = _0x59ddf1.task_list[_0x5c5d85];
                  this.taskbtn = _0x50a9d4.btn.content;
                  _0x50a9d4.task_id == _0x106f0d && (this.taskbtn == "已完成" || this.taskbtn == "已领取" || this.taskbtn == "明日再来" ? DoubleLog("\n ❌ 【" + this.index + "】" + _0x1b0fd2 + ": 今天任务已上限，明天再来~") : await this.open_task(_0x106f0d, _0x34e576, _0x1b0fd2, 2 * 1000));
                }
              }
            }
          }
        } catch (_0x158080) {
          $.logErr(_0x158080, _0x409abc);
        } finally {
          _0x432b85();
        }
      }, _0xf725f7);
    });
  }
  async ["open_task"](_0x518a3d, _0x819c68, _0x6e667b, _0x4ddc50 = 2000) {
    return new Promise(_0xb00c4e => {
      let _0x494b6d = {
        "url": hostname + "/welf/h5/v1/task/finish-task",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "16"
        },
        "body": "{\"task_id\":\"" + _0x518a3d + "\"}"
      };
      $.post(_0x494b6d, async (_0x597025, _0x377b72, _0x1511c8) => {
        try {
          if (_0x597025) $.logErr(_0x597025);else {
            await this.open_reward(_0x518a3d, _0x819c68, _0x6e667b, 2 * 1000);
          }
        } catch (_0x348196) {
          $.logErr(_0x348196, _0x377b72);
        } finally {
          _0xb00c4e();
        }
      }, _0x4ddc50);
    });
  }
  async ["open_reward"](_0xb32aa1, _0x5a8524, _0x54e660, _0x45df76 = 2000) {
    return new Promise(_0x1e6be7 => {
      let _0x2196d0 = {
        "url": hostname + "/welf/h5/v1/task/reward",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "117"
        },
        "body": "{\"task_id\":\"" + _0xb32aa1 + "\",\"type_prefix\":\"" + _0x5a8524 + "\",\"reward_type\":\"0\",\"axiosConfig\":{\"params\":{\"install_app_list\":\"\",\"st\":\"click\"}}}"
      };
      $.post(_0x2196d0, async (_0x2ae1ab, _0x119fe1, _0x406f14) => {
        try {
          if (_0x2ae1ab) $.logErr(_0x2ae1ab);else {
            let _0x225b5a = JSON.parse(_0x406f14);
            _0x225b5a.reward > 0 ? DoubleLog("\n ✅ 【" + this.index + "】" + _0x54e660 + ": 获得 " + _0x225b5a.reward + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】" + _0x54e660 + ": " + _0x225b5a.errors.title);
          }
        } catch (_0x59772f) {
          $.logErr(_0x59772f, _0x119fe1);
        } finally {
          _0x1e6be7();
        }
      }, _0x45df76);
    });
  }
  async ["lucky_draw"](_0x50f2c8 = 2000) {
    return new Promise(_0x2ebd4c => {
      let _0x5c41d5 = {
        "url": hostname + "/lucky-seven/h5/v1/lottery?source=3&apiVersion=20190309143259 - 1.9",
        "headers": {
          "Host": host,
          "Content-Type": "application/json;charset=UTF-8",
          "authorization": this.ck[0],
          "qm-uaf": "20230520-66734097",
          "application-id": "com.xm.freader",
          "reg": "3029200754",
          "User-Agent": getUA(),
          "qm-params": this.ck[1],
          "channel": "qm-xiaomi_lf",
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "117"
        },
        "body": "{\"t\": " + timestamp + ",\"apiVersion\": 20190309143259 - 1.9}"
      };
      $.post(_0x5c41d5, async (_0x1991f3, _0x203054, _0xfc99) => {
        try {
          if (_0x1991f3) $.logErr(_0x1991f3);else {
            let _0x152927 = JSON.parse(_0xfc99);
            _0x152927.data != null ? DoubleLog("\n ✅ 【" + this.index + "】幸运抽奖: 获得 " + _0x152927.data.title) : DoubleLog("\n ❌ 【" + this.index + "】幸运抽奖: " + _0x152927.errors.title + "，无法继续抽奖。");
          }
        } catch (_0x15ac93) {
          $.logErr(_0x15ac93, _0x203054);
        } finally {
          _0x2ebd4c();
        }
      }, _0x50f2c8);
    });
  }
}
!(async () => {
  if (!(await checkEnv())) return;
  userList.length > 0 && (DoubleLog("\n 🎉 交流Q群：104062430 作者:乐客播 欢迎前来提交bug"), DoubleLog("\n================ 共找到 " + userList.length + " 个账号 ================ \n\n 脚本执行✌北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " "), versionupdate == 1 ? (await getVersion(), DoubleLog("\n================ 版本对比检查更新 ==============="), scriptVersionLatest != scriptVersion ? (DoubleLog("\n 当前版本：" + scriptVersion + "，更新时间：" + update_tines), DoubleLog("\n 最新版本：" + scriptVersionLatest), DoubleLog("\n 更新信息：" + update_data)) : DoubleLog("\n 版本信息：" + scriptVersion + " ，已是最新版本无需更新开始执行脚本")) : (DoubleLog("\n================ 版本对比检查更新 ==============="), DoubleLog("\n 当前版本:" + scriptVersion + "，更新时间:" + update_tines + "，已设不更新版本")), DoubleLog("\n================ 开始执行会员脚本 ==============="), await start());
})().catch(_0x39f438 => console.log(_0x39f438)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x54ed59 = envSplitor[0];
    for (let _0x493723 of envSplitor) if (userCookie.indexOf(_0x493723) > -1) {
      _0x54ed59 = _0x493723;
      break;
    }
    for (let _0x47d892 of userCookie.split(_0x54ed59)) _0x47d892 && userList.push(new UserInfo(_0x47d892));
    userCount = userList.length;
  } else {
    console.log("\n 乐客播提示：系统变量未填写 Token");
    return;
  }
  return true;
}
function getVersion(_0x29279d = 3 * 1000) {
  return new Promise(_0xf6561a => {
    let _0x2033de = {
      "url": "https://ghproxy.com/https://raw.githubusercontent.com/qq274023/lekebo/master/lekebo_kww.js"
    };
    $.get(_0x2033de, async (_0x5a0724, _0x2e7bac, _0x299789) => {
      try {
        scriptVersionLatest = _0x299789.match(/scriptVersion = "([\d\.]+)"/)[1];
        update_data = _0x299789.match(/update_data = "(.*?)"/)[1];
      } catch (_0x58bff1) {
        $.logErr(_0x58bff1, _0x2e7bac);
      } finally {
        _0xf6561a();
      }
    }, _0x29279d);
  });
}
function randomString(_0x140b55) {
  _0x140b55 = _0x140b55 || 32;
  var _0x472afe = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x73b1c8 = _0x472afe.length,
    _0x4aa9b0 = "";
  for (i = 0; i < _0x140b55; i++) _0x4aa9b0 += _0x472afe.charAt(Math.floor(Math.random() * _0x73b1c8));
  return _0x4aa9b0;
}
function randomNum(_0x1f593b, _0x489bb8) {
  if (arguments.length === 0) return Math.random();
  if (!_0x489bb8) _0x489bb8 = 10 ** (Math.log(_0x1f593b) * Math.LOG10E + 1 | 0) - 1;
  return Math.floor(Math.random() * (_0x489bb8 - _0x1f593b + 1) + _0x1f593b);
}
function getUA() {
  $.UUID = randomString(40);
  const _0x3dc91f = {
    "167814": "10.1.4",
    "167841": "10.1.6",
    "167853": "10.2.0"
  };
  $.osVersion = randomNum(13, 14) + "." + randomNum(3, 6) + "." + randomNum(1, 3);
  let _0x4172b4 = "network/" + ["4g", "5g", "wifi"][randomNum(0, 2)];
  return $.mobile = "iPhone" + randomNum(9, 13) + "," + randomNum(1, 3), $.build = ["167814", "167841", "167853"][randomNum(0, 2)], $.appVersion = _0x3dc91f[$.build], "jdapp;iPhone;" + $.appVersion + ";" + $.osVersion + ";" + $.UUID + ";M/5.0;" + _0x4172b4 + ";ADID/;model/" + $.mobile + ";addressid/;appBuild/" + $.build + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + $.osVersion.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function delay() {
  let _0x462e39 = parseInt(Math.random() * 100000);
  if (_0x462e39 > 30000) return delay();else {
    return console.log("随机延时：", _0x462e39 + "ms, 避免大家运行时间一样"), _0x462e39;
  }
}