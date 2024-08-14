//Wed Aug 14 2024 01:20:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * 
 * 项目类型：APP
 * 项目名称：熊猫脑洞小说
 * 项目更新：2023-05-20
 * 项目抓包：抓api-gw.wtzw.com
 authorization&qm-params
 * 环境变量：lekebo_xmxs_Cookie
 * 项目定时：每30分钟运行一次
 * 定时规则: * 30 * * * *
 * 
 * 
 */

const $ = new Env("\u718A\u732B\u8111\u6D1E\u5C0F\u8BF4");
//-------------------- 一般不动变量区域 -------------------------------------
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 0; //通知设置      0关闭  1开启
let debug = 0; //Debug调试     0关闭  1开启
let envSplitor = ["@", "\n"]; //多账号分隔符
let ck = msg = ""; //let ck,msg
//===============脚本版本=================//
var version_ = "jsjiami.com.v7";
const _0x37c150 = _0x1a78;
(function (_0x4ec21c, _0x46661b, _0x40c913, _0x398ea5, _0x3a228f, _0x31be7d, _0x432079) {
  return _0x4ec21c = _0x4ec21c >> 7, _0x31be7d = "hs", _0x432079 = "hs", function (_0x524e2e, _0x35e6c9, _0x1f17cb, _0x4d16e5, _0x111db2) {
    const _0x2c91f7 = _0x1a78;
    _0x4d16e5 = "tfi", _0x31be7d = _0x4d16e5 + _0x31be7d, _0x111db2 = "up", _0x432079 += _0x111db2, _0x31be7d = _0x1f17cb(_0x31be7d), _0x432079 = _0x1f17cb(_0x432079), _0x1f17cb = 0;
    const _0x4f6568 = _0x524e2e();
    while (!![] && --_0x398ea5 + _0x35e6c9) {
      try {
        _0x4d16e5 = -parseInt(_0x2c91f7(469, "As5F")) / 1 * (-parseInt(_0x2c91f7(610, "qJbH")) / 2) + -parseInt(_0x2c91f7(756, "KURh")) / 3 * (parseInt(_0x2c91f7(389, "[W**")) / 4) + parseInt(_0x2c91f7(710, "JGKU")) / 5 * (parseInt(_0x2c91f7(261, "F2*O")) / 6) + parseInt(_0x2c91f7(511, "T14T")) / 7 * (parseInt(_0x2c91f7(585, "F2*O")) / 8) + -parseInt(_0x2c91f7(586, "N)s^")) / 9 * (parseInt(_0x2c91f7(676, "P5Gm")) / 10) + -parseInt(_0x2c91f7(725, "G1tp")) / 11 + parseInt(_0x2c91f7(636, "JayH")) / 12;
      } catch (_0x5b5d90) {
        _0x4d16e5 = _0x1f17cb;
      } finally {
        _0x111db2 = _0x4f6568[_0x31be7d]();
        if (_0x4ec21c <= _0x398ea5) _0x1f17cb ? _0x3a228f ? _0x4d16e5 = _0x111db2 : _0x3a228f = _0x111db2 : _0x1f17cb = _0x111db2;else {
          if (_0x1f17cb == _0x3a228f["replace"](/[UTQdYOeCktFnEWR=]/g, "")) {
            if (_0x4d16e5 === _0x35e6c9) {
              _0x4f6568["un" + _0x31be7d](_0x111db2);
              break;
            }
            _0x4f6568[_0x432079](_0x111db2);
          }
        }
      }
    }
  }(_0x40c913, _0x46661b, function (_0x593543, _0xe0ed50, _0x3e6630, _0x3ab358, _0x2b88e8, _0xaea4f9, _0x30db3c) {
    return _0xe0ed50 = "split", _0x593543 = arguments[0], _0x593543 = _0x593543[_0xe0ed50](""), _0x3e6630 = "reverse", _0x593543 = _0x593543[_0x3e6630]("v"), _0x3ab358 = "join", (1232725, _0x593543[_0x3ab358](""));
  });
}(25472, 581295, _0x332e, 201), _0x332e) && (version_ = _0x332e);
let scriptVersion = _0x37c150(792, "qJbH"),
  update_tines = _0x37c150(387, "n^7u"),
  update_data = _0x37c150(443, "N)s^"),
  versionupdate = "0",
  scriptVersionLatest = _0x37c150(398, "Pilp"),
  userCookie = ($[_0x37c150(362, "Xxr8")]() ? process[_0x37c150(708, "Pilp")][_0x37c150(558, "cQ62")] : $["getdata"](_0x37c150(541, "As5F"))) || "",
  userList = [],
  userIdx = 0,
  userCount = 0,
  timeHours = parseInt($[_0x37c150(488, "Xxr8")]("HH")),
  times = Math[_0x37c150(241, "WTpY")](new Date()["getTime"]() / 1000)["toString"](),
  timestamp = Math[_0x37c150(302, "lAUS")](new Date()["getTime"]())[_0x37c150(391, "8O8d")](),
  host = _0x37c150(535, "4fqu"),
  hostname = _0x37c150(225, "pUdO") + host;
async function start() {
  const _0x1b469d = _0x37c150,
    _0x2c2582 = {
      "PnMZm": function (_0x544c24, _0x4e3757) {
        return _0x544c24 * _0x4e3757;
      },
      "YZOpa": function (_0x39eb0a, _0x3e36f9) {
        return _0x39eb0a(_0x3e36f9);
      },
      "EPJBy": function (_0x11de9c, _0x77a3aa) {
        return _0x11de9c(_0x77a3aa);
      },
      "MDQOh": "\u770B\u5C0F\u89C6\u9891",
      "VxSMu": function (_0x283dd4, _0x47b07e) {
        return _0x283dd4(_0x47b07e);
      },
      "Thhfq": function (_0x5902e7, _0x2ae088) {
        return _0x5902e7 !== _0x2ae088;
      },
      "xzTzB": _0x1b469d(274, "Xxr8"),
      "udXcP": _0x1b469d(425, "pUdO"),
      "NKTBF": _0x1b469d(473, "ehko"),
      "hgaNq": _0x1b469d(739, ")vnJ"),
      "MXPNR": function (_0x3cacc9, _0x1e9877) {
        return _0x3cacc9 * _0x1e9877;
      },
      "PfmHU": function (_0x3aa5d0, _0x448e99) {
        return _0x3aa5d0 !== _0x448e99;
      }
    };
  taskall = [];
  for (let _0xacd812 of userList) {
    taskall[_0x1b469d(339, "TLlt")](await _0xacd812["getMemberScore"](_0x2c2582[_0x1b469d(596, "pUdO")](2, 1000))), await $[_0x1b469d(327, "cQ62")](1000);
  }
  await Promise["all"](taskall), _0x2c2582[_0x1b469d(434, "3aUF")](DoubleLog, _0x1b469d(429, "JGKU")), taskall = [];
  for (let _0x4e5b32 of userList) {
    taskall[_0x1b469d(657, "!%xJ")](await _0x4e5b32[_0x1b469d(747, "(C0m")](_0x2c2582["PnMZm"](2, 1000))), await $["wait"](1000);
  }
  await Promise[_0x1b469d(773, "pehr")](taskall), _0x2c2582[_0x1b469d(589, "@e#5")](DoubleLog, _0x1b469d(210, "PRNf")), taskall = [];
  for (let _0x195b04 of userList) {
    taskall["push"](await _0x195b04[_0x1b469d(547, "ufrq")](_0x2c2582[_0x1b469d(453, "$#e@")](2, 1000))), taskall[_0x1b469d(380, "[6kl")](await _0x195b04[_0x1b469d(775, "[O6W")](2000)), await $[_0x1b469d(371, ")P3c")](1000);
  }
  await Promise[_0x1b469d(758, "P5Gm")](taskall), _0x2c2582[_0x1b469d(750, "TLlt")](DoubleLog, _0x1b469d(409, "3aIs")), taskall = [];
  for (let _0x177994 of userList) {
    taskall["push"](await _0x177994[_0x1b469d(790, "WTpY")](22, "task", _0x2c2582["MDQOh"], _0x2c2582[_0x1b469d(770, "C9Ku")](2, 1000))), await $[_0x1b469d(700, "!%xJ")](1000);
  }
  await Promise["all"](taskall), _0x2c2582["VxSMu"](DoubleLog, _0x1b469d(705, "F2*O")), taskall = [];
  for (let _0x509ccc of userList) {
    _0x2c2582["Thhfq"](_0x2c2582[_0x1b469d(552, "3aUF")], _0x2c2582[_0x1b469d(412, "[W**")]) ? (taskall[_0x1b469d(436, "qJbH")](await _0x509ccc["task"](113, _0x2c2582[_0x1b469d(431, "*6@[")], _0x2c2582[_0x1b469d(789, "@fo8")], _0x2c2582["MXPNR"](2, 1000))), await $[_0x1b469d(623, "Xxr8")](1000)) : _0x44c163[_0x1b469d(330, "pehr")](_0x2aed9c, _0xf9237e);
  }
  await Promise[_0x1b469d(701, "@e#5")](taskall), DoubleLog(_0x1b469d(786, ")vnJ")), taskall = [];
  for (let _0x30b8f5 of userList) {
    _0x2c2582[_0x1b469d(681, "(C0m")](_0x1b469d(447, "(C0m"), _0x1b469d(679, "*6@[")) ? (taskall[_0x1b469d(539, "Xxr8")](await _0x30b8f5["task"](24, _0x2c2582[_0x1b469d(512, "cQ62")], _0x1b469d(642, "8O8d"), 2000)), await $[_0x1b469d(567, "nVzZ")](1000)) : (this[_0x1b469d(207, "*6@[")] = ++_0x262ada, this["ck"] = _0x1263e6["split"]("&"));
  }
  await Promise["all"](taskall);
}
function _0x1a78(_0x2539ca, _0x4d8ee5) {
  const _0x332e09 = _0x332e();
  return _0x1a78 = function (_0x1a78c7, _0x942578) {
    _0x1a78c7 = _0x1a78c7 - 206;
    let _0x1740f0 = _0x332e09[_0x1a78c7];
    if (_0x1a78["WOoBNa"] === undefined) {
      var _0x59aad9 = function (_0x1bcffa) {
        const _0x262ada = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x1263e6 = "",
          _0x2770d5 = "";
        for (let _0x14430c = 0, _0x3e8138, _0x44ef81, _0x4dd0e8 = 0; _0x44ef81 = _0x1bcffa["charAt"](_0x4dd0e8++); ~_0x44ef81 && (_0x3e8138 = _0x14430c % 4 ? _0x3e8138 * 64 + _0x44ef81 : _0x44ef81, _0x14430c++ % 4) ? _0x1263e6 += String["fromCharCode"](255 & _0x3e8138 >> (-2 * _0x14430c & 6)) : 0) {
          _0x44ef81 = _0x262ada["indexOf"](_0x44ef81);
        }
        for (let _0x4b4ab8 = 0, _0x44f046 = _0x1263e6["length"]; _0x4b4ab8 < _0x44f046; _0x4b4ab8++) {
          _0x2770d5 += "%" + ("00" + _0x1263e6["charCodeAt"](_0x4b4ab8)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x2770d5);
      };
      const _0x1d607b = function (_0x42448a, _0x29925c) {
        let _0x490ce5 = [],
          _0xfd76fb = 0,
          _0x8a33cd,
          _0x225a3a = "";
        _0x42448a = _0x59aad9(_0x42448a);
        let _0x572a59;
        for (_0x572a59 = 0; _0x572a59 < 256; _0x572a59++) {
          _0x490ce5[_0x572a59] = _0x572a59;
        }
        for (_0x572a59 = 0; _0x572a59 < 256; _0x572a59++) {
          _0xfd76fb = (_0xfd76fb + _0x490ce5[_0x572a59] + _0x29925c["charCodeAt"](_0x572a59 % _0x29925c["length"])) % 256, _0x8a33cd = _0x490ce5[_0x572a59], _0x490ce5[_0x572a59] = _0x490ce5[_0xfd76fb], _0x490ce5[_0xfd76fb] = _0x8a33cd;
        }
        _0x572a59 = 0, _0xfd76fb = 0;
        for (let _0x39a0a7 = 0; _0x39a0a7 < _0x42448a["length"]; _0x39a0a7++) {
          _0x572a59 = (_0x572a59 + 1) % 256, _0xfd76fb = (_0xfd76fb + _0x490ce5[_0x572a59]) % 256, _0x8a33cd = _0x490ce5[_0x572a59], _0x490ce5[_0x572a59] = _0x490ce5[_0xfd76fb], _0x490ce5[_0xfd76fb] = _0x8a33cd, _0x225a3a += String["fromCharCode"](_0x42448a["charCodeAt"](_0x39a0a7) ^ _0x490ce5[(_0x490ce5[_0x572a59] + _0x490ce5[_0xfd76fb]) % 256]);
        }
        return _0x225a3a;
      };
      _0x1a78["Adpxbx"] = _0x1d607b, _0x2539ca = arguments, _0x1a78["WOoBNa"] = !![];
    }
    const _0x355c0f = _0x332e09[0],
      _0x476b1d = _0x1a78c7 + _0x355c0f,
      _0x4afc66 = _0x2539ca[_0x476b1d];
    return !_0x4afc66 ? (_0x1a78["bROzTe"] === undefined && (_0x1a78["bROzTe"] = !![]), _0x1740f0 = _0x1a78["Adpxbx"](_0x1740f0, _0x942578), _0x2539ca[_0x476b1d] = _0x1740f0) : _0x1740f0 = _0x4afc66, _0x1740f0;
  }, _0x1a78(_0x2539ca, _0x4d8ee5);
}
class UserInfo {
  constructor(_0x1017e1) {
    const _0x442846 = _0x37c150;
    this[_0x442846(628, "8O8d")] = ++userIdx, this["ck"] = _0x1017e1[_0x442846(768, "pUdO")]("&");
  }
  async ["getMemberScore"](_0x387170 = 2000) {
    const _0x36385a = _0x37c150,
      _0x5af32b = {
        "MXYhN": function (_0x59b5a6, _0x84a124) {
          return _0x59b5a6 == _0x84a124;
        },
        "cAsAc": _0x36385a(632, "MPza"),
        "RQrkl": _0x36385a(625, "N)s^"),
        "yWTAV": function (_0x571f08, _0x10e099) {
          return _0x571f08 === _0x10e099;
        },
        "EjHTc": "uHjBZ",
        "GthIr": "KYhwh",
        "EEOgW": function (_0x22f201, _0x3bcb91) {
          return _0x22f201(_0x3bcb91);
        },
        "QeEbP": function (_0xa0bb87, _0x198116) {
          return _0xa0bb87 !== _0x198116;
        },
        "RIwyk": "RmMwZ",
        "KrpDF": "aZpME",
        "vOGfK": function (_0x691457, _0x3625bc) {
          return _0x691457(_0x3625bc);
        },
        "HDpvV": function (_0x537435) {
          return _0x537435();
        },
        "JTXUV": _0x36385a(639, "KURh"),
        "JTYsz": "com.xm.freader",
        "aNyCn": function (_0x56b445) {
          return _0x56b445();
        },
        "pujWf": _0x36385a(693, "[O6W"),
        "BFCSC": "20600"
      };
    return new Promise(_0x48567f => {
      const _0x2b8a99 = _0x36385a,
        _0x5c7041 = {
          "knDBn": function (_0x2bd244, _0x4bab61) {
            return _0x5af32b["vOGfK"](_0x2bd244, _0x4bab61);
          },
          "UUAad": function (_0x27cffd, _0x1d87c4) {
            return _0x27cffd * _0x1d87c4;
          },
          "HDNrf": function (_0x300127, _0x3b277e) {
            return _0x300127 > _0x3b277e;
          },
          "buXef": function (_0x4fbb6c) {
            const _0x333d26 = _0x1a78;
            return _0x5af32b[_0x333d26(381, "4fqu")](_0x4fbb6c);
          },
          "nKBhp": _0x5af32b["JTXUV"]
        };
      let _0x422397 = {
        "url": hostname + "/welf/h5/v1/task-list",
        "headers": {
          "Host": host,
          "Content-Type": _0x2b8a99(459, "cQ62"),
          "authorization": this["ck"][0],
          "qm-uaf": "20230520-66734097",
          "application-id": _0x5af32b[_0x2b8a99(782, "JGKU")],
          "reg": "3029200754",
          "User-Agent": _0x5af32b["aNyCn"](getUA),
          "qm-params": this["ck"][1],
          "channel": _0x5af32b[_0x2b8a99(533, "(!#Z")],
          "platform": _0x2b8a99(734, "qJbH"),
          "app-version": _0x5af32b["BFCSC"],
          "Content-Length": "151"
        },
        "body": "{\"module_sign\":[{\"category\":\"new_user\",\"sign\":\"4e6f894b47d8a2f929c50ccf209ef125\"},{\"category\":\"daily_task\",\"sign\":\"dd6fc9104e657f9d833bd2aab7881ff8\"}]}"
      };
      $[_0x2b8a99(540, "*6@[")](_0x422397, async (_0x3c990b, _0x276822, _0x1df577) => {
        const _0x25dca3 = _0x2b8a99,
          _0xe29163 = {
            "VPzqI": function (_0x4188e6, _0x3fd27e) {
              return _0x5af32b["MXYhN"](_0x4188e6, _0x3fd27e);
            },
            "BfypF": function (_0x45ae53, _0x1142f9) {
              return _0x45ae53(_0x1142f9);
            },
            "zqyHP": function (_0x5b06c3) {
              return _0x5b06c3();
            }
          };
        try {
          if (_0x3c990b) {
            if (_0x5af32b[_0x25dca3(665, ")P3c")] !== _0x5af32b[_0x25dca3(319, "JayH")]) $["logErr"](_0x3c990b);else {
              let _0x2c512e = _0x29925c[_0x25dca3(646, "[O6W")](_0x490ce5);
              _0xe29163[_0x25dca3(788, "qJbH")](_0x2c512e[_0x25dca3(806, "ufrq")][_0x25dca3(655, "@e#5")], 1) ? _0xe29163["BfypF"](_0x225a3a, _0x25dca3(584, "@e#5") + this[_0x25dca3(402, "T14T")] + _0x25dca3(229, "TLlt") + _0x2c512e[_0x25dca3(279, "[6kl")]["coin_data"] + _0x25dca3(717, "qJbH") + _0x2c512e["user"]["cash_data"] + "\u5143") : _0x572a59(_0x25dca3(224, "[6kl") + this[_0x25dca3(338, "qJbH")] + "\u3011\u6536\u76CA\u72B6\u51B5: " + _0x2c512e[_0x25dca3(810, "(C0m")]);
            }
          } else {
            if (_0x5af32b["yWTAV"](_0x5af32b[_0x25dca3(757, "MUcz")], _0x5af32b[_0x25dca3(461, "[W**")])) _0xe29163[_0x25dca3(316, "8O8d")](_0x832342);else {
              let _0x238c72 = JSON[_0x25dca3(766, "x%Eu")](_0x1df577);
              _0x5af32b["MXYhN"](_0x238c72[_0x25dca3(366, "[O6W")][_0x25dca3(617, "F2*O")], 1) ? _0x5af32b["EEOgW"](DoubleLog, _0x25dca3(324, ")P3c") + this[_0x25dca3(517, "MPza")] + "\u3011\u6536\u76CA\u72B6\u51B5: \u62E5\u6709:" + _0x238c72[_0x25dca3(506, "MUcz")][_0x25dca3(414, "ZkRI")] + "\u91D1\u5E01\uFF0C\u4F59\u989D:" + _0x238c72["user"]["cash_data"] + "\u5143") : _0x5af32b[_0x25dca3(614, "x%Eu")](DoubleLog, "\n \u274C \u3010" + this[_0x25dca3(694, "F2*O")] + _0x25dca3(795, "pehr") + _0x238c72[_0x25dca3(690, "dN]5")]);
            }
          }
        } catch (_0x104f14) {
          if (_0x5af32b[_0x25dca3(780, "@fo8")](_0x5af32b["RIwyk"], _0x5af32b[_0x25dca3(256, "Xxr8")])) $[_0x25dca3(421, "lAUS")](_0x104f14, _0x276822);else {
            let _0x110cf5 = _0x5c7041[_0x25dca3(423, "3aIs")](_0x4b3096, _0x5c7041[_0x25dca3(245, "JGKU")](_0x308586["random"](), 100000));
            return _0x5c7041["HDNrf"](_0x110cf5, 30000) ? _0x5c7041["buXef"](_0x350328) : (_0xed894["log"](_0x5c7041[_0x25dca3(569, "lAUS")], _0x110cf5 + _0x25dca3(214, "MPza")), _0x110cf5);
          }
        } finally {
          _0x48567f();
        }
      }, _0x387170);
    });
  }
  async [_0x37c150(616, "1PT!")](_0x5ec37f = 2000) {
    const _0x497892 = _0x37c150,
      _0x1983d9 = {
        "gYYTi": _0x497892(303, "@e#5"),
        "knrCP": _0x497892(357, "Pilp"),
        "XFAcj": function (_0x3a27db, _0x308cbe) {
          return _0x3a27db === _0x308cbe;
        },
        "AdZjp": _0x497892(523, "cQ62"),
        "vjdEc": function (_0x273ceb, _0x5c365e) {
          return _0x273ceb == _0x5c365e;
        },
        "QiZEn": function (_0x414f63, _0x3cef47) {
          return _0x414f63(_0x3cef47);
        },
        "jgDOw": _0x497892(570, "Pilp"),
        "xbtEh": _0x497892(312, "$#e@"),
        "umMRi": function (_0x37e44a, _0x509577) {
          return _0x37e44a(_0x509577);
        },
        "DcgIl": function (_0x2a6691, _0x327ca1) {
          return _0x2a6691 === _0x327ca1;
        },
        "tYPRl": _0x497892(618, "01pG"),
        "fWbOB": function (_0xf32266) {
          return _0xf32266();
        },
        "DYJgR": "application/json;charset=UTF-8",
        "laUch": _0x497892(510, "F2*O"),
        "AvFJc": _0x497892(260, "G1tp"),
        "GfNnN": function (_0x2773f4) {
          return _0x2773f4();
        },
        "hlmYv": _0x497892(516, "(!#Z")
      };
    return new Promise(_0x22b65b => {
      const _0x1b3c91 = _0x497892,
        _0x407757 = {
          "SQksv": function (_0x19300e) {
            const _0x2fc0a7 = _0x1a78;
            return _0x1983d9[_0x2fc0a7(799, "Xxr8")](_0x19300e);
          }
        };
      let _0x2240cf = {
        "url": hostname + _0x1b3c91(760, "$#e@"),
        "headers": {
          "Host": host,
          "Content-Type": _0x1983d9["DYJgR"],
          "authorization": this["ck"][0],
          "qm-uaf": _0x1983d9[_0x1b3c91(644, "1PT!")],
          "application-id": _0x1b3c91(480, "MUcz"),
          "reg": _0x1983d9[_0x1b3c91(778, "As5F")],
          "User-Agent": _0x1983d9[_0x1b3c91(549, "WTpY")](getUA),
          "qm-params": this["ck"][1],
          "channel": _0x1983d9[_0x1b3c91(550, "PRNf")],
          "platform": "android",
          "app-version": "20600",
          "Content-Length": "151"
        },
        "body": _0x1b3c91(572, "ufrq")
      };
      $[_0x1b3c91(613, "zMV3")](_0x2240cf, async (_0x2c8bcb, _0x54bc35, _0x4f50bf) => {
        const _0x27076b = _0x1b3c91,
          _0x1b1c33 = {
            "pRHns": _0x1983d9[_0x27076b(730, "F2*O")]
          };
        if (_0x1983d9[_0x27076b(462, "1PT!")] === _0x1983d9[_0x27076b(230, "pUdO")]) try {
          if (_0x2c8bcb) $[_0x27076b(709, "3aIs")](_0x2c8bcb);else {
            if (_0x1983d9[_0x27076b(714, "3aUF")](_0x1983d9["AdZjp"], _0x27076b(680, "Pilp"))) {
              let _0x3dff9b = JSON["parse"](_0x4f50bf);
              if (_0x1983d9["vjdEc"](_0x3dff9b[_0x27076b(355, "3aIs")][_0x27076b(754, "Pilp")], 1)) _0x1983d9[_0x27076b(561, "nVzZ")](DoubleLog, _0x27076b(577, "As5F") + this["index"] + _0x27076b(208, "x%Eu") + _0x3dff9b[_0x27076b(226, "MUcz")][_0x27076b(731, "ufrq")] + " \u5929");else {
                if (_0x1983d9[_0x27076b(336, "1PT!")] === _0x1983d9[_0x27076b(451, "ehko")]) return _0x4b64a9[_0x27076b(696, "1PT!")](_0x1b1c33[_0x27076b(522, "!%xJ")], _0x477c40 + _0x27076b(647, "N)s^")), _0x4ff05a;else _0x1983d9["umMRi"](DoubleLog, "\n \u274C \u3010" + this[_0x27076b(543, "[W**")] + _0x27076b(498, "nVzZ") + _0x3dff9b[_0x27076b(346, "01pG")]);
              }
            } else _0x3b9185[_0x27076b(218, "ZkRI")](_0x2d5992);
          }
        } catch (_0x2bcd57) {
          if (_0x1983d9[_0x27076b(722, "T14T")](_0x27076b(275, "(!#Z"), _0x1983d9[_0x27076b(746, "T14T")])) return _0x407757["SQksv"](_0x32d037);else $[_0x27076b(765, "pUdO")](_0x2bcd57, _0x54bc35);
        } finally {
          _0x1983d9[_0x27076b(743, "01pG")](_0x22b65b);
        } else _0x5f2d0c[_0x27076b(771, "ufrq")](_0x2aeb41, _0x4563de);
      }, _0x5ec37f);
    });
  }
  async [_0x37c150(808, "lAUS")](_0x205eb5 = 2000) {
    const _0x3c8a06 = _0x37c150,
      _0x3d0ad8 = {
        "KrWWL": function (_0x480758, _0x592f58) {
          return _0x480758 ** _0x592f58;
        },
        "ZBJft": function (_0x1da3c8, _0x38a1ed) {
          return _0x1da3c8 + _0x38a1ed;
        },
        "HUvzf": function (_0x4df74a, _0x2a5db3) {
          return _0x4df74a * _0x2a5db3;
        },
        "jxDRr": function (_0x57664e, _0x3ff4d4) {
          return _0x57664e === _0x3ff4d4;
        },
        "QZBQD": _0x3c8a06(635, "ZkRI"),
        "hhijl": function (_0x371c90, _0x1fbc6f) {
          return _0x371c90 === _0x1fbc6f;
        },
        "CAGsB": _0x3c8a06(468, "$#e@"),
        "Ghhou": _0x3c8a06(449, "[W**"),
        "Fxrlu": function (_0xd7ae72, _0x5ae4f9) {
          return _0xd7ae72(_0x5ae4f9);
        },
        "MIxUR": _0x3c8a06(416, "F2*O"),
        "HNnpN": function (_0x23a460) {
          return _0x23a460();
        },
        "bKpMy": _0x3c8a06(372, "WTpY"),
        "GlpKB": "3029200754",
        "bqZrP": "qm-xiaomi_lf",
        "gvKjc": _0x3c8a06(505, "R*5I")
      };
    return new Promise(_0x5e2b65 => {
      const _0x367e77 = _0x3c8a06,
        _0x2cf897 = {
          "lzbwR": function (_0x31b39c, _0x3f099f) {
            const _0x2b687e = _0x1a78;
            return _0x3d0ad8[_0x2b687e(270, "JGKU")](_0x31b39c, _0x3f099f);
          },
          "CqXfa": function (_0x4f5546, _0x1d8cf2) {
            return _0x4f5546 | _0x1d8cf2;
          },
          "TonMw": function (_0x21923c, _0x476865) {
            return _0x3d0ad8["ZBJft"](_0x21923c, _0x476865);
          },
          "fEsWa": function (_0x5aa8b8, _0x3e080c) {
            const _0x34d2a8 = _0x1a78;
            return _0x3d0ad8[_0x34d2a8(272, "(!#Z")](_0x5aa8b8, _0x3e080c);
          },
          "fSxYZ": function (_0x1ecb72, _0x297ee9) {
            const _0x559589 = _0x1a78;
            return _0x3d0ad8[_0x559589(721, "4fqu")](_0x1ecb72, _0x297ee9);
          },
          "PbGdA": _0x3d0ad8["QZBQD"],
          "tvmJk": function (_0x29c423, _0x2b02f6) {
            const _0x213ad9 = _0x1a78;
            return _0x3d0ad8[_0x213ad9(433, "n^7u")](_0x29c423, _0x2b02f6);
          },
          "DljBQ": _0x3d0ad8[_0x367e77(367, "WTpY")],
          "aGvpk": _0x3d0ad8[_0x367e77(688, "TLlt")],
          "lHDmu": function (_0x349ab6, _0x29abb7) {
            return _0x3d0ad8["Fxrlu"](_0x349ab6, _0x29abb7);
          },
          "MAOke": _0x3d0ad8[_0x367e77(685, "JGKU")],
          "GfDfQ": function (_0x37a569) {
            return _0x3d0ad8["HNnpN"](_0x37a569);
          }
        };
      let _0x188eaf = {
        "url": hostname + "/welf/h5/v1/task/treasure",
        "headers": {
          "Host": host,
          "Content-Type": _0x367e77(489, "1PT!"),
          "authorization": this["ck"][0],
          "qm-uaf": "20230520-66734097",
          "application-id": _0x3d0ad8[_0x367e77(349, ")vnJ")],
          "reg": _0x3d0ad8[_0x367e77(531, "x%Eu")],
          "User-Agent": _0x3d0ad8[_0x367e77(811, "x%Eu")](getUA),
          "qm-params": this["ck"][1],
          "channel": _0x3d0ad8[_0x367e77(341, "[6kl")],
          "platform": _0x367e77(624, "ehko"),
          "app-version": _0x3d0ad8[_0x367e77(645, "zMV3")],
          "Content-Length": _0x367e77(620, "lAUS")
        }
      };
      $["get"](_0x188eaf, async (_0x2cc92b, _0x19f605, _0x449ff3) => {
        const _0x69f4d9 = _0x367e77,
          _0x28dc89 = {
            "JiVQd": function (_0x50287d, _0x3caf09) {
              return _0x50287d === _0x3caf09;
            },
            "TJsTB": function (_0x281468, _0x4f2452) {
              const _0x47fb71 = _0x1a78;
              return _0x2cf897[_0x47fb71(529, "P5Gm")](_0x281468, _0x4f2452);
            },
            "bUpNI": function (_0x636f8d, _0x54ab13) {
              const _0x5367d9 = _0x1a78;
              return _0x2cf897[_0x5367d9(384, "[O6W")](_0x636f8d, _0x54ab13);
            },
            "Yrsun": function (_0x548d5d, _0x244799) {
              const _0x4cbde2 = _0x1a78;
              return _0x2cf897[_0x4cbde2(651, "Xxr8")](_0x548d5d, _0x244799);
            },
            "xOqJh": function (_0x4b5144, _0x50d620) {
              const _0xca96df = _0x1a78;
              return _0x2cf897[_0xca96df(784, "ehko")](_0x4b5144, _0x50d620);
            },
            "OozXM": function (_0x500984, _0x104cae) {
              return _0x500984 - _0x104cae;
            }
          };
        try {
          if (_0x2cf897[_0x69f4d9(666, "JGKU")](_0x69f4d9(481, "PRNf"), _0x2cf897[_0x69f4d9(352, "C9Ku")])) {
            if (_0x28dc89["JiVQd"](arguments["length"], 0)) return _0x504dc9["random"]();
            if (!_0x27ac40) _0x269800 = _0x28dc89["TJsTB"](10, _0x28dc89["bUpNI"](_0x1e82ad[_0x69f4d9(474, "P5Gm")](_0x316986) * _0x118b2b["LOG10E"] + 1, 0)) - 1;
            return _0x96c2c1["floor"](_0x28dc89[_0x69f4d9(325, "T14T")](_0x28dc89[_0x69f4d9(703, "8O8d")](_0xb59f00["random"](), _0x28dc89[_0x69f4d9(733, ")P3c")](_0x3abd96, _0xbd1249) + 1), _0x45bf63));
          } else {
            if (_0x2cc92b) $["logErr"](_0x2cc92b);else {
              if (_0x2cf897[_0x69f4d9(246, "@e#5")](_0x2cf897[_0x69f4d9(650, "N)s^")], _0x2cf897["DljBQ"])) {
                let _0x22a6da = JSON[_0x69f4d9(815, "pehr")](_0x449ff3);
                _0x22a6da[_0x69f4d9(637, "@e#5")] > 0 ? _0x2cf897["aGvpk"] === _0x2cf897[_0x69f4d9(211, "[6kl")] ? _0x2cf897[_0x69f4d9(560, "lAUS")](DoubleLog, "\n \u274C \u3010" + this["index"] + _0x69f4d9(745, "cQ62") + $[_0x69f4d9(465, "WTpY")](_0x2cf897[_0x69f4d9(482, "ZkRI")], _0x22a6da[_0x69f4d9(534, "pUdO")] * 1000) + _0x69f4d9(428, "As5F")) : _0x3911ce["logErr"](_0x2ece4f, _0x5315a0) : await this["open_treasure"](_0x2cf897[_0x69f4d9(670, "ufrq")](2, 1000));
              } else _0x3e8138[_0x69f4d9(793, "G1tp")](_0x44ef81);
            }
          }
        } catch (_0x1a1c3d) {
          $[_0x69f4d9(206, "MPza")](_0x1a1c3d, _0x19f605);
        } finally {
          _0x2cf897[_0x69f4d9(463, "C9Ku")](_0x5e2b65);
        }
      }, _0x205eb5);
    });
  }
  async [_0x37c150(735, "[6kl")](_0x56881a = 2000) {
    const _0x195d1a = _0x37c150,
      _0x275906 = {
        "yzAVQ": function (_0x4441f3, _0xd3c388) {
          return _0x4441f3 > _0xd3c388;
        },
        "TxOdB": function (_0x20eee8, _0x417218) {
          return _0x20eee8 !== _0x417218;
        },
        "KmpNK": function (_0x1d222a, _0x9070bc) {
          return _0x1d222a(_0x9070bc);
        },
        "LpGVb": "dYcWR",
        "OJwWE": function (_0x5effde) {
          return _0x5effde();
        },
        "zRFqK": "20230520-66734097",
        "Uexls": _0x195d1a(781, "3aUF")
      };
    return new Promise(_0xf94a20 => {
      const _0xb1f9b7 = _0x195d1a,
        _0x40b47a = {
          "zczgx": function (_0x9d0c6e, _0x3284de) {
            return _0x275906["yzAVQ"](_0x9d0c6e, _0x3284de);
          },
          "zvrqE": function (_0x4ecce2, _0x49b0f9) {
            const _0x136e1b = _0x1a78;
            return _0x275906[_0x136e1b(255, "01pG")](_0x4ecce2, _0x49b0f9);
          },
          "AylKn": _0xb1f9b7(527, "[W**"),
          "GYFBj": function (_0x2ad71d, _0x13a687) {
            return _0x275906["KmpNK"](_0x2ad71d, _0x13a687);
          },
          "jPeRc": function (_0x3520aa, _0x9e891b) {
            return _0x3520aa === _0x9e891b;
          },
          "MUjYa": _0x275906["LpGVb"],
          "KfFDf": function (_0x3038d4) {
            const _0x17cb09 = _0xb1f9b7;
            return _0x275906[_0x17cb09(687, "R*5I")](_0x3038d4);
          }
        };
      let _0x106978 = {
        "url": hostname + "/welf/h5/v1/task/treasure/reward",
        "headers": {
          "Host": host,
          "Content-Type": _0xb1f9b7(667, "3aUF"),
          "authorization": this["ck"][0],
          "qm-uaf": _0x275906["zRFqK"],
          "application-id": _0xb1f9b7(472, "T14T"),
          "reg": _0x275906[_0xb1f9b7(308, "R*5I")],
          "User-Agent": getUA(),
          "qm-params": this["ck"][1],
          "channel": _0xb1f9b7(278, "@fo8"),
          "platform": _0xb1f9b7(573, "G1tp"),
          "app-version": _0xb1f9b7(232, ")P3c"),
          "Content-Length": "151"
        },
        "body": "{\"t\": " + timestamp + "}"
      };
      $[_0xb1f9b7(282, "As5F")](_0x106978, async (_0x1adc3f, _0x23d1a1, _0x1b53a4) => {
        const _0x166df5 = _0xb1f9b7;
        if ("olzMW" !== _0x166df5(305, "KURh")) _0x48e4ea["logErr"](_0x1e1396);else try {
          if (_0x1adc3f) $["logErr"](_0x1adc3f);else {
            let _0x487563 = JSON[_0x166df5(291, "JGKU")](_0x1b53a4);
            _0x40b47a[_0x166df5(638, "KURh")](_0x487563["reward"], 0) ? _0x40b47a["zvrqE"](_0x166df5(587, "@e#5"), _0x40b47a[_0x166df5(227, "n^7u")]) ? _0x40b47a[_0x166df5(403, "[W**")](DoubleLog, _0x166df5(728, "01pG") + this[_0x166df5(442, "G1tp")] + _0x166df5(682, "cQ62") + _0x487563["reward"] + " \u91D1\u5E01") : _0x27650b[_0x166df5(415, "JGKU")](_0x227b5d) : _0x40b47a[_0x166df5(764, "TLlt")](_0x40b47a["MUjYa"], _0x40b47a[_0x166df5(677, "C9Ku")]) ? _0x40b47a[_0x166df5(538, "N)s^")](DoubleLog, _0x166df5(328, "@fo8") + this[_0x166df5(207, "*6@[")] + "\u3011\u6253\u5F00\u5B9D\u7BB1: " + _0x487563[_0x166df5(774, "1PT!")]["title"]) : _0x20a017();
          }
        } catch (_0x4e2977) {
          $[_0x166df5(709, "3aIs")](_0x4e2977, _0x23d1a1);
        } finally {
          _0x40b47a[_0x166df5(719, "3aUF")](_0xf94a20);
        }
      }, _0x56881a);
    });
  }
  async [_0x37c150(406, "As5F")](_0x181d4f = 2000) {
    const _0x1328aa = _0x37c150,
      _0x4f0b31 = {
        "eDMHj": function (_0x4f7272, _0x256133) {
          return _0x4f7272 > _0x256133;
        },
        "xiiZm": function (_0x17940f, _0x92f9e7) {
          return _0x17940f === _0x92f9e7;
        },
        "TqCIA": _0x1328aa(292, "TLlt"),
        "tiYaW": function (_0x1e4004, _0x323140) {
          return _0x1e4004(_0x323140);
        },
        "oMMZE": _0x1328aa(354, "N)s^"),
        "lefUJ": _0x1328aa(485, "JGKU"),
        "khvED": function (_0x4567df) {
          return _0x4567df();
        },
        "xVhHG": function (_0x4cceae, _0x1e27a2) {
          return _0x4cceae === _0x1e27a2;
        },
        "fdsnx": _0x1328aa(748, "3aUF"),
        "UwnZu": _0x1328aa(311, "WTpY"),
        "QyOoO": _0x1328aa(254, "dN]5"),
        "GvMpk": _0x1328aa(237, "cQ62"),
        "CVweZ": "android",
        "WLaYq": _0x1328aa(441, "Pilp"),
        "ZJiNN": _0x1328aa(385, "!%xJ")
      };
    return new Promise(_0x3ebfe1 => {
      const _0x5b86ef = _0x1328aa,
        _0x6b6306 = {
          "DCmMn": function (_0x4102a1, _0x223aa7) {
            return _0x4102a1(_0x223aa7);
          }
        };
      if (_0x4f0b31[_0x5b86ef(525, "cQ62")](_0x5b86ef(247, "pUdO"), _0x4f0b31["fdsnx"])) {
        let _0x3c7b10 = {
          "url": hostname + _0x5b86ef(724, "G1tp"),
          "headers": {
            "Host": host,
            "Content-Type": _0x4f0b31[_0x5b86ef(238, "Pilp")],
            "authorization": this["ck"][0],
            "qm-uaf": _0x5b86ef(726, "Xxr8"),
            "application-id": _0x4f0b31[_0x5b86ef(393, "01pG")],
            "reg": _0x4f0b31[_0x5b86ef(809, "cQ62")],
            "User-Agent": _0x4f0b31["khvED"](getUA),
            "qm-params": this["ck"][1],
            "channel": _0x5b86ef(321, "lNml"),
            "platform": _0x4f0b31[_0x5b86ef(706, "Xxr8")],
            "app-version": _0x4f0b31["WLaYq"],
            "Content-Length": _0x4f0b31["ZJiNN"]
          },
          "body": _0x5b86ef(269, "P5Gm") + timestamp + ",\"position\": \"welfare_treasurebox_timely\",\"video_prefix\": \"task_video_two\"}"
        };
        $["post"](_0x3c7b10, async (_0x3c2fed, _0xeb0959, _0x59212b) => {
          const _0x48dd8 = _0x5b86ef;
          try {
            if (_0x3c2fed) $[_0x48dd8(711, "C9Ku")](_0x3c2fed);else {
              let _0x40c9b1 = JSON[_0x48dd8(446, "(!#Z")](_0x59212b);
              _0x4f0b31["eDMHj"](_0x40c9b1["reward"], 0) ? _0x4f0b31[_0x48dd8(438, "C9Ku")](_0x4f0b31[_0x48dd8(663, "4fqu")], _0x4f0b31[_0x48dd8(707, "PRNf")]) ? _0x4f0b31[_0x48dd8(342, "N)s^")](DoubleLog, "\n \u2705 \u3010" + this[_0x48dd8(287, "TLlt")] + _0x48dd8(348, "[6kl") + _0x40c9b1[_0x48dd8(776, ")vnJ")] + _0x48dd8(537, "(C0m")) : _0x6b6306[_0x48dd8(794, "ZkRI")](_0x4e1af7, _0x48dd8(328, "@fo8") + this[_0x48dd8(307, "lNml")] + _0x48dd8(377, "qJbH") + _0x16b477["err_tips"]) : _0x4f0b31["tiYaW"](DoubleLog, _0x48dd8(448, "ufrq") + this[_0x48dd8(454, "cQ62")] + "\u3011\u5B9D\u7BB1\u5E7F\u544A: " + _0x40c9b1[_0x48dd8(257, "zMV3")][_0x48dd8(594, "Xxr8")]);
            }
          } catch (_0x3836be) {
            _0x4f0b31[_0x48dd8(553, "ufrq")] !== _0x4f0b31[_0x48dd8(718, "R*5I")] ? $[_0x48dd8(216, "@fo8")](_0x3836be, _0xeb0959) : (_0x27837b = _0x1a244b[_0x48dd8(450, "[W**")](/scriptVersion = "([\d\.]+)"/)[1], _0x26d78a = _0x2c26a4[_0x48dd8(264, "KURh")](/update_data = "(.*?)"/)[1]);
          } finally {
            _0x4f0b31[_0x48dd8(761, "TLlt")](_0x3ebfe1);
          }
        }, _0x181d4f);
      } else _0x441f8a["logErr"](_0x425839);
    });
  }
  async ["task"](_0x106f0d, _0x34e576, _0x1b0fd2, _0xf725f7 = 2000) {
    const _0x28f74e = _0x37c150,
      _0x1be7d5 = {
        "gVtWE": function (_0x12879e, _0x5ec500) {
          return _0x12879e == _0x5ec500;
        },
        "oqhhS": "FSewe",
        "pOFvT": function (_0x269d00) {
          return _0x269d00();
        },
        "eewlc": _0x28f74e(630, "zMV3"),
        "EfWEr": _0x28f74e(551, "ufrq"),
        "WysvN": "com.xm.freader",
        "drdlC": "3029200754",
        "IMUgs": _0x28f74e(265, "nVzZ"),
        "wpaFI": _0x28f74e(250, "1PT!"),
        "YwicI": _0x28f74e(578, "ZkRI")
      };
    return new Promise(_0x432b85 => {
      const _0x4b3484 = _0x28f74e,
        _0x563d21 = {
          "RryJo": "XXaFg",
          "mAXHo": function (_0x130ced, _0x4907d3) {
            return _0x130ced < _0x4907d3;
          },
          "QHcEe": function (_0x55eb82, _0x54e6ee) {
            const _0x2e8685 = _0x1a78;
            return _0x1be7d5[_0x2e8685(492, "C9Ku")](_0x55eb82, _0x54e6ee);
          },
          "PSyLM": function (_0x654a45, _0x3134e7) {
            const _0x4d87e9 = _0x1a78;
            return _0x1be7d5[_0x4d87e9(499, "*6@[")](_0x654a45, _0x3134e7);
          },
          "wuhqZ": _0x4b3484(503, "[6kl"),
          "jpOxs": function (_0x210f62, _0x5622a9) {
            const _0x5e487e = _0x4b3484;
            return _0x1be7d5[_0x5e487e(386, "[O6W")](_0x210f62, _0x5622a9);
          },
          "qVIno": function (_0x14c049, _0x1a455b) {
            return _0x14c049 === _0x1a455b;
          },
          "QxDxE": _0x4b3484(591, "[6kl"),
          "dslnk": _0x1be7d5["oqhhS"],
          "dfEGY": function (_0x2d4ada) {
            const _0x573a0f = _0x4b3484;
            return _0x1be7d5[_0x573a0f(437, "ehko")](_0x2d4ada);
          }
        };
      let _0xa4119e = {
        "url": hostname + _0x4b3484(483, "R*5I"),
        "headers": {
          "Host": host,
          "Content-Type": _0x1be7d5["eewlc"],
          "authorization": this["ck"][0],
          "qm-uaf": _0x1be7d5[_0x4b3484(805, "*6@[")],
          "application-id": _0x1be7d5[_0x4b3484(501, "PRNf")],
          "reg": _0x1be7d5["drdlC"],
          "User-Agent": getUA(),
          "qm-params": this["ck"][1],
          "channel": _0x1be7d5[_0x4b3484(502, "Xxr8")],
          "platform": _0x1be7d5[_0x4b3484(435, "F2*O")],
          "app-version": _0x1be7d5[_0x4b3484(248, "ehko")]
        },
        "body": _0x4b3484(704, "F2*O")
      };
      $[_0x4b3484(713, "cQ62")](_0xa4119e, async (_0x3306a3, _0x409abc, _0x196371) => {
        const _0xe4dc5a = _0x4b3484;
        try {
          if (_0x3306a3) $["logErr"](_0x3306a3);else {
            let _0x1f3a6e = JSON[_0xe4dc5a(607, "F2*O")](_0x196371);
            if (_0x1f3a6e[_0xe4dc5a(621, "[W**")] && Array["isArray"](_0x1f3a6e[_0xe4dc5a(361, "C9Ku")])) {
              if (_0xe4dc5a(400, "As5F") !== _0x563d21["RryJo"]) for (let _0x29d90e = 0; _0x563d21[_0xe4dc5a(723, ")vnJ")](_0x29d90e, _0x1f3a6e[_0xe4dc5a(410, "lAUS")]["length"]); _0x29d90e++) {
                let _0x59ddf1 = _0x1f3a6e[_0xe4dc5a(410, "lAUS")][_0x29d90e];
                for (let _0x5c5d85 = 0; _0x5c5d85 < _0x59ddf1[_0xe4dc5a(602, "Pilp")][_0xe4dc5a(643, "1PT!")]; _0x5c5d85++) {
                  let _0x50a9d4 = _0x59ddf1[_0xe4dc5a(633, "N)s^")][_0x5c5d85];
                  this[_0xe4dc5a(318, "pehr")] = _0x50a9d4[_0xe4dc5a(329, "1PT!")][_0xe4dc5a(737, "(!#Z")], _0x563d21["QHcEe"](_0x50a9d4[_0xe4dc5a(322, ")P3c")], _0x106f0d) && (_0x563d21["PSyLM"](this[_0xe4dc5a(242, "Xxr8")], _0x563d21[_0xe4dc5a(285, "pehr")]) || this[_0xe4dc5a(259, "(C0m")] == _0xe4dc5a(672, "KURh") || _0x563d21["jpOxs"](this[_0xe4dc5a(634, "4fqu")], "\u660E\u65E5\u518D\u6765") ? _0x563d21["qVIno"](_0x563d21[_0xe4dc5a(280, "[O6W")], "pMpaM") ? _0x380a1f[_0xe4dc5a(421, "lAUS")](_0x413d1d) : DoubleLog(_0xe4dc5a(467, "@e#5") + this[_0xe4dc5a(686, "JayH")] + "\u3011" + _0x1b0fd2 + ": \u4ECA\u5929\u4EFB\u52A1\u5DF2\u4E0A\u9650\uFF0C\u660E\u5929\u518D\u6765~") : await this[_0xe4dc5a(592, ")P3c")](_0x106f0d, _0x34e576, _0x1b0fd2, 2000));
                }
              } else _0x3e6dfc();
            }
          }
        } catch (_0x158080) {
          _0x563d21[_0xe4dc5a(564, "ehko")] !== _0x563d21["dslnk"] ? (_0x134e3d(_0xe4dc5a(530, "3aUF")), _0x356daf(_0xe4dc5a(627, "As5F") + _0x257fd0 + _0xe4dc5a(347, "$#e@") + _0x4a31e3 + "\uFF0C\u5DF2\u8BBE\u4E0D\u66F4\u65B0\u7248\u672C")) : $[_0xe4dc5a(709, "3aIs")](_0x158080, _0x409abc);
        } finally {
          _0x563d21["dfEGY"](_0x432b85);
        }
      }, _0xf725f7);
    });
  }
  async [_0x37c150(515, "As5F")](_0x518a3d, _0x819c68, _0x6e667b, _0x4ddc50 = 2000) {
    const _0xdc526b = _0x37c150,
      _0x310ab9 = {
        "cEZbk": function (_0x23248a, _0xbb2f05) {
          return _0x23248a(_0xbb2f05);
        },
        "JuFtC": _0xdc526b(490, "C9Ku"),
        "xqrVk": function (_0x3892fe, _0x1cf6cf) {
          return _0x3892fe * _0x1cf6cf;
        },
        "MdfIQ": function (_0x3c614c) {
          return _0x3c614c();
        },
        "xpuHG": function (_0x2ab3c3, _0x3ea49b) {
          return _0x2ab3c3 !== _0x3ea49b;
        },
        "yLacV": _0xdc526b(683, "JGKU"),
        "VIgRE": _0xdc526b(605, "C9Ku"),
        "GcqsE": "20230520-66734097",
        "Hbzic": "com.xm.freader",
        "BgbnF": _0xdc526b(749, "As5F"),
        "gDKtv": "android"
      };
    return new Promise(_0xb00c4e => {
      const _0x355ac3 = _0xdc526b,
        _0x591357 = {
          "RFrCS": function (_0x44cbeb, _0x597215) {
            return _0x44cbeb > _0x597215;
          },
          "ILcUO": function (_0x67b76d, _0x4fc7c8) {
            const _0x505bd5 = _0x1a78;
            return _0x310ab9[_0x505bd5(396, "G1tp")](_0x67b76d, _0x4fc7c8);
          },
          "YYOKx": function (_0x569ae3, _0x2b47f9) {
            return _0x569ae3(_0x2b47f9);
          },
          "iqSva": _0x355ac3(779, "pehr"),
          "KyZJH": _0x310ab9["JuFtC"],
          "EtOta": function (_0x18574e, _0x500c0c) {
            const _0x51f554 = _0x355ac3;
            return _0x310ab9[_0x51f554(691, ")P3c")](_0x18574e, _0x500c0c);
          },
          "sCWJr": _0x355ac3(382, "JayH"),
          "dYZUV": function (_0x125999) {
            const _0x3359a2 = _0x355ac3;
            return _0x310ab9[_0x3359a2(664, ")vnJ")](_0x125999);
          }
        };
      if (_0x310ab9["xpuHG"](_0x310ab9["yLacV"], _0x355ac3(487, "*6@["))) {
        let _0x494b6d = {
          "url": hostname + _0x355ac3(286, "[6kl"),
          "headers": {
            "Host": host,
            "Content-Type": _0x310ab9[_0x355ac3(221, "cQ62")],
            "authorization": this["ck"][0],
            "qm-uaf": _0x310ab9[_0x355ac3(608, "pUdO")],
            "application-id": _0x310ab9[_0x355ac3(619, "pUdO")],
            "reg": _0x310ab9[_0x355ac3(231, "cQ62")],
            "User-Agent": getUA(),
            "qm-params": this["ck"][1],
            "channel": "qm-xiaomi_lf",
            "platform": _0x310ab9[_0x355ac3(313, "[6kl")],
            "app-version": _0x355ac3(297, "dN]5"),
            "Content-Length": "16"
          },
          "body": _0x355ac3(554, "F2*O") + _0x518a3d + "\"}"
        };
        $[_0x355ac3(626, "TLlt")](_0x494b6d, async (_0x597025, _0x377b72, _0x1511c8) => {
          const _0x5881a7 = _0x355ac3,
            _0x18011f = {
              "IbPtj": function (_0x5d77fe, _0x304e1b) {
                const _0x3f3a87 = _0x1a78;
                return _0x591357[_0x3f3a87(763, "@fo8")](_0x5d77fe, _0x304e1b);
              }
            };
          try {
            if (_0x597025) $[_0x5881a7(656, "F2*O")](_0x597025);else {
              if (_0x591357[_0x5881a7(580, "MPza")] !== _0x591357[_0x5881a7(240, ")vnJ")]) {
                let _0x371ab8 = JSON["parse"](_0x1511c8);
                await this[_0x5881a7(217, "!%xJ")](_0x518a3d, _0x819c68, _0x6e667b, _0x591357[_0x5881a7(404, "T14T")](2, 1000));
              } else {
                let _0x3d5077 = _0x5e9b5b["parse"](_0x20c11d);
                _0x591357["RFrCS"](_0x3d5077[_0x5881a7(579, "T14T")], 0) ? _0x591357["ILcUO"](_0x575f6d, _0x5881a7(470, "lNml") + this[_0x5881a7(309, "N)s^")] + "\u3011\u5B9D\u7BB1\u5E7F\u544A: \u83B7\u5F97 " + _0x3d5077["reward"] + _0x5881a7(486, "4fqu")) : _0x591357[_0x5881a7(484, "@fo8")](_0x515f64, "\n \u274C \u3010" + this[_0x5881a7(787, "ufrq")] + _0x5881a7(544, "x%Eu") + _0x3d5077[_0x5881a7(514, "3aIs")][_0x5881a7(597, "Pilp")]);
              }
            }
          } catch (_0x348196) {
            $["logErr"](_0x348196, _0x377b72);
          } finally {
            _0x591357["sCWJr"] === _0x591357[_0x5881a7(323, "4fqu")] ? _0x591357["dYZUV"](_0xb00c4e) : _0x18011f[_0x5881a7(629, "ufrq")](_0x2a13cc, _0x5881a7(732, "nVzZ") + this[_0x5881a7(652, "WTpY")] + "\u3011\u7B7E\u5230\u4FE1\u606F: \u4ECA\u5929\u5DF2\u7B7E\u5230\uFF0C\u5DF2\u8FDE\u7EED\u7B7E\u5230 " + _0x2c52ce[_0x5881a7(519, "Xxr8")][_0x5881a7(500, ")P3c")] + " \u5929");
          }
        }, _0x4ddc50);
      } else _0x310ab9[_0x355ac3(659, "lNml")](_0x1084be, "\n \u2705 \u3010" + this["index"] + _0x355ac3(350, "R*5I") + _0x2f463b["data"]["title"]);
    });
  }
  async [_0x37c150(217, "!%xJ")](_0xb32aa1, _0x5a8524, _0x54e660, _0x45df76 = 2000) {
    const _0x12dbda = _0x37c150,
      _0xace8de = {
        "txzsp": _0x12dbda(452, "pUdO"),
        "zkXFH": function (_0x46b644, _0x51c70d) {
          return _0x46b644 * _0x51c70d;
        },
        "PXXLH": function (_0x5f0de8, _0x1c74eb) {
          return _0x5f0de8 !== _0x1c74eb;
        },
        "dMyfu": _0x12dbda(333, "pehr"),
        "xzxrU": _0x12dbda(715, "lNml"),
        "yIUau": _0x12dbda(397, "*6@["),
        "rMhJM": function (_0x5131bf, _0x23ded6) {
          return _0x5131bf === _0x23ded6;
        },
        "akpeE": "wQeat",
        "BTFBE": function (_0x18bdb8, _0x1dc112) {
          return _0x18bdb8(_0x1dc112);
        },
        "RPHqK": function (_0x5e767f, _0x49168a) {
          return _0x5e767f !== _0x49168a;
        },
        "NeEOG": _0x12dbda(603, "(C0m"),
        "PkJLf": function (_0x41658e, _0x4c9842) {
          return _0x41658e(_0x4c9842);
        },
        "QMPzx": function (_0x32cb6f) {
          return _0x32cb6f();
        },
        "ZULOt": "application/json;charset=UTF-8",
        "rgJIv": "20230520-66734097",
        "wlEqU": "com.xm.freader",
        "hdKol": _0x12dbda(369, "x%Eu"),
        "fEsfI": _0x12dbda(477, "(!#Z"),
        "QplUH": _0x12dbda(640, "WTpY")
      };
    return new Promise(_0x1e6be7 => {
      const _0x477a9c = _0x12dbda,
        _0x331a63 = {
          "faAWE": function (_0x570d5f) {
            const _0x5080e7 = _0x1a78;
            return _0xace8de[_0x5080e7(344, "@fo8")](_0x570d5f);
          },
          "VzEFO": function (_0x215883, _0x38a5a0) {
            const _0xf30bcc = _0x1a78;
            return _0xace8de[_0xf30bcc(571, ")P3c")](_0x215883, _0x38a5a0);
          }
        };
      let _0x2196d0 = {
        "url": hostname + _0x477a9c(281, "R*5I"),
        "headers": {
          "Host": host,
          "Content-Type": _0xace8de[_0x477a9c(378, "$#e@")],
          "authorization": this["ck"][0],
          "qm-uaf": _0xace8de[_0x477a9c(298, "$#e@")],
          "application-id": _0xace8de[_0x477a9c(276, "MPza")],
          "reg": _0xace8de[_0x477a9c(215, "(C0m")],
          "User-Agent": getUA(),
          "qm-params": this["ck"][1],
          "channel": _0x477a9c(471, "TLlt"),
          "platform": "android",
          "app-version": _0xace8de[_0x477a9c(658, "PRNf")],
          "Content-Length": _0xace8de[_0x477a9c(356, "01pG")]
        },
        "body": "{\"task_id\":\"" + _0xb32aa1 + _0x477a9c(741, ")P3c") + _0x5a8524 + _0x477a9c(432, "(!#Z")
      };
      $["post"](_0x2196d0, async (_0x2ae1ab, _0x119fe1, _0x406f14) => {
        const _0x2255b8 = _0x477a9c,
          _0x55411c = {
            "HOlGd": _0xace8de[_0x2255b8(251, "[O6W")],
            "BZQLx": function (_0x2b069b, _0x35b9eb) {
              const _0x2e8f49 = _0x2255b8;
              return _0xace8de[_0x2e8f49(668, "KURh")](_0x2b069b, _0x35b9eb);
            }
          };
        try {
          if (_0x2ae1ab) _0xace8de[_0x2255b8(253, "01pG")](_0x2255b8(807, "[O6W"), _0xace8de["dMyfu"]) ? _0x31da81() : $[_0x2255b8(576, "P5Gm")](_0x2ae1ab);else {
            if (_0xace8de[_0x2255b8(791, ")vnJ")](_0xace8de[_0x2255b8(478, "R*5I")], _0xace8de["yIUau"])) {
              let _0x225b5a = JSON[_0x2255b8(277, "n^7u")](_0x406f14);
              _0x225b5a["reward"] > 0 ? _0xace8de[_0x2255b8(464, "[6kl")](_0xace8de["akpeE"], _0xace8de[_0x2255b8(306, "Pilp")]) ? _0xace8de[_0x2255b8(228, "!%xJ")](DoubleLog, _0x2255b8(720, "Xxr8") + this[_0x2255b8(235, "[6kl")] + "\u3011" + _0x54e660 + _0x2255b8(430, "n^7u") + _0x225b5a["reward"] + _0x2255b8(405, "x%Eu")) : _0x331a63[_0x2255b8(408, "zMV3")](_0x9353e5) : _0xace8de[_0x2255b8(729, "G1tp")](_0xace8de[_0x2255b8(223, "MUcz")], _0x2255b8(353, "PRNf")) ? _0x4e2976() : _0xace8de[_0x2255b8(212, "dN]5")](DoubleLog, _0x2255b8(301, "P5Gm") + this[_0x2255b8(266, "dN]5")] + "\u3011" + _0x54e660 + ": " + _0x225b5a[_0x2255b8(759, "01pG")][_0x2255b8(504, "cQ62")]);
            } else _0x436592("\n \u274C \u3010" + this["index"] + _0x2255b8(374, "@e#5") + _0x5d322e[_0x2255b8(458, "T14T")](_0x55411c[_0x2255b8(755, "R*5I")], _0x55411c[_0x2255b8(420, "pehr")](_0x189186[_0x2255b8(209, "As5F")], 1000)) + _0x2255b8(684, "pUdO"));
          }
        } catch (_0x59772f) {
          $[_0x2255b8(709, "3aIs")](_0x59772f, _0x119fe1);
        } finally {
          if (_0x2255b8(814, "[O6W") === _0x2255b8(426, "qJbH")) {
            let _0x14b523 = _0x5bdd90[_0x2255b8(646, "[O6W")](_0x2253eb);
            _0x14b523[_0x2255b8(712, ")P3c")] > 0 ? _0x331a63["VzEFO"](_0x20c034, _0x2255b8(417, "3aIs") + this[_0x2255b8(460, "4fqu")] + "\u3011" + _0x4b5f7a + _0x2255b8(496, "ZkRI") + _0x14b523[_0x2255b8(641, "1PT!")] + _0x2255b8(456, "[W**")) : _0xad37e9(_0x2255b8(520, "$#e@") + this[_0x2255b8(287, "TLlt")] + "\u3011" + _0x40ee4a + ": " + _0x14b523[_0x2255b8(401, "!%xJ")]["title"]);
          } else _0xace8de[_0x2255b8(742, "nVzZ")](_0x1e6be7);
        }
      }, _0x45df76);
    });
  }
  async [_0x37c150(678, "lAUS")](_0x50f2c8 = 2000) {
    const _0x76d409 = _0x37c150,
      _0x1cf9cc = {
        "WTTWc": function (_0x37a1d6, _0x7d4984) {
          return _0x37a1d6 === _0x7d4984;
        },
        "NIHTP": _0x76d409(803, "lNml"),
        "mcEQv": _0x76d409(293, "8O8d"),
        "odYBC": _0x76d409(702, "F2*O"),
        "CspYL": function (_0x35bad7, _0x1a34bd) {
          return _0x35bad7 != _0x1a34bd;
        },
        "qkYom": function (_0x5bb1b4, _0x34f29e) {
          return _0x5bb1b4(_0x34f29e);
        },
        "LDrqE": function (_0x13ea76, _0x284a2d) {
          return _0x13ea76(_0x284a2d);
        },
        "einea": function (_0x4c4a88) {
          return _0x4c4a88();
        },
        "ktznQ": function (_0x44ee0c, _0x500468) {
          return _0x44ee0c(_0x500468);
        },
        "qcwxs": _0x76d409(233, "1PT!"),
        "BaIGP": _0x76d409(507, "As5F"),
        "oBBav": _0x76d409(557, "@fo8"),
        "eObYR": function (_0x344f8f) {
          return _0x344f8f();
        },
        "qkyWi": "20600"
      };
    return new Promise(_0x2ebd4c => {
      const _0x1995f6 = _0x76d409;
      if (_0x1cf9cc[_0x1995f6(736, "MUcz")](_0x1cf9cc[_0x1995f6(222, "G1tp")], _0x1cf9cc[_0x1995f6(740, "TLlt")])) {
        let _0x5c41d5 = {
          "url": hostname + _0x1995f6(475, "pehr"),
          "headers": {
            "Host": host,
            "Content-Type": "application/json;charset=UTF-8",
            "authorization": this["ck"][0],
            "qm-uaf": _0x1cf9cc[_0x1995f6(599, "01pG")],
            "application-id": _0x1cf9cc[_0x1995f6(388, "PRNf")],
            "reg": "3029200754",
            "User-Agent": _0x1cf9cc["eObYR"](getUA),
            "qm-params": this["ck"][1],
            "channel": "qm-xiaomi_lf",
            "platform": _0x1995f6(411, "ZkRI"),
            "app-version": _0x1cf9cc["qkyWi"],
            "Content-Length": _0x1995f6(320, "dN]5")
          },
          "body": _0x1995f6(358, "Xxr8") + timestamp + ",\"apiVersion\": 20190309143259 - 1.9}"
        };
        $[_0x1995f6(752, "1PT!")](_0x5c41d5, async (_0x1991f3, _0x203054, _0xfc99) => {
          const _0x20f00d = _0x1995f6;
          if (_0x1cf9cc["WTTWc"](_0x1cf9cc["NIHTP"], _0x1cf9cc["mcEQv"])) _0x200184[_0x20f00d(697, "[6kl")](_0x1e321a);else try {
            if (_0x1991f3) $[_0x20f00d(648, "zMV3")](_0x1991f3);else {
              if (_0x1cf9cc[_0x20f00d(575, ")vnJ")] !== _0x1cf9cc[_0x20f00d(545, "[6kl")]) _0xe86f9e[_0x20f00d(455, "Xxr8")](_0x49c352);else {
                let _0x152927 = JSON["parse"](_0xfc99);
                _0x1cf9cc[_0x20f00d(440, "lAUS")](_0x152927[_0x20f00d(744, "qJbH")], null) ? _0x1cf9cc[_0x20f00d(542, "qJbH")](DoubleLog, _0x20f00d(244, "pehr") + this[_0x20f00d(787, "ufrq")] + _0x20f00d(622, "TLlt") + _0x152927[_0x20f00d(334, "$#e@")]["title"]) : _0x1cf9cc[_0x20f00d(299, "T14T")](DoubleLog, "\n \u274C \u3010" + this[_0x20f00d(615, "KURh")] + "\u3011\u5E78\u8FD0\u62BD\u5956: " + _0x152927["errors"]["title"] + "\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u62BD\u5956\u3002");
              }
            }
          } catch (_0x15ac93) {
            $[_0x20f00d(466, "lNml")](_0x15ac93, _0x203054);
          } finally {
            _0x1cf9cc["einea"](_0x2ebd4c);
          }
        }, _0x50f2c8);
      } else _0x1cf9cc[_0x1995f6(583, "3aIs")](_0x4e6008, _0x1995f6(418, "cQ62") + this["index"] + "\u3011" + _0x4d85a6 + ": " + _0xdd41f7[_0x1995f6(612, "T14T")]["title"]);
    });
  }
}
!(async () => {
  const _0x4f7018 = _0x37c150,
    _0x9b20d = {
      "QllWN": function (_0x26b295, _0x753c28) {
        return _0x26b295(_0x753c28);
      },
      "QsHcG": function (_0x3371f3, _0x1400d6) {
        return _0x3371f3 > _0x1400d6;
      },
      "DezZO": function (_0x24e751, _0xb7b173) {
        return _0x24e751(_0xb7b173);
      },
      "jvuBG": function (_0x34d673, _0x3aaed3) {
        return _0x34d673 * _0x3aaed3;
      },
      "pcTPh": function (_0x5594d4, _0x2772d0) {
        return _0x5594d4 * _0x2772d0;
      },
      "LInTr": function (_0x17d8c9, _0x4bdc36) {
        return _0x17d8c9 * _0x4bdc36;
      },
      "iaBAZ": function (_0x57959a, _0x29b4ef) {
        return _0x57959a == _0x29b4ef;
      },
      "FWxRX": function (_0x2ff19c, _0x5ec0c0) {
        return _0x2ff19c !== _0x5ec0c0;
      },
      "fwRam": "GDgYU",
      "mSzHv": _0x4f7018(413, "ufrq"),
      "uiHLI": function (_0x19e88e) {
        return _0x19e88e();
      },
      "hQLpN": function (_0x852e54, _0xdf7207) {
        return _0x852e54(_0xdf7207);
      },
      "GcgjJ": function (_0x3f698e, _0xc71a05) {
        return _0x3f698e(_0xc71a05);
      },
      "nBNRS": function (_0x54d249, _0x248bb8) {
        return _0x54d249(_0x248bb8);
      },
      "fxHHM": function (_0x217fcf, _0x281fc1) {
        return _0x217fcf(_0x281fc1);
      }
    };
  if (!(await checkEnv())) return;
  _0x9b20d["QsHcG"](userList[_0x4f7018(337, "$#e@")], 0) && (_0x9b20d[_0x4f7018(365, "(C0m")](DoubleLog, _0x4f7018(335, "[W**")), _0x9b20d["DezZO"](DoubleLog, "\n================ \u5171\u627E\u5230 " + userList[_0x4f7018(494, "ehko")] + _0x4f7018(675, "G1tp") + new Date(new Date()[_0x4f7018(219, "!%xJ")]() + new Date()[_0x4f7018(295, "C9Ku")]() * 60 * 1000 + _0x9b20d[_0x4f7018(521, "lAUS")](_0x9b20d[_0x4f7018(262, "TLlt")](_0x9b20d[_0x4f7018(493, "nVzZ")](8, 60), 60), 1000))["toLocaleString"]() + " "), _0x9b20d[_0x4f7018(331, "ehko")](versionupdate, 1) ? _0x9b20d[_0x4f7018(234, "ZkRI")](_0x9b20d["fwRam"], _0x9b20d[_0x4f7018(802, "TLlt")]) ? (await _0x9b20d[_0x4f7018(753, "nVzZ")](getVersion), _0x9b20d[_0x4f7018(236, "[6kl")](DoubleLog, _0x4f7018(804, "TLlt")), scriptVersionLatest != scriptVersion ? (_0x9b20d["QllWN"](DoubleLog, _0x4f7018(444, "KURh") + scriptVersion + _0x4f7018(439, "[O6W") + update_tines), DoubleLog(_0x4f7018(798, "T14T") + scriptVersionLatest), _0x9b20d[_0x4f7018(290, "4fqu")](DoubleLog, "\n \u66F4\u65B0\u4FE1\u606F\uFF1A" + update_data)) : _0x9b20d[_0x4f7018(495, "nVzZ")](DoubleLog, _0x4f7018(582, "ZkRI") + scriptVersion + _0x4f7018(476, "3aUF"))) : _0x9b20d["QllWN"](_0x13eb3d, _0x4f7018(243, "[O6W") + this[_0x4f7018(307, "lNml")] + _0x4f7018(609, "1PT!") + _0x58e10d[_0x4f7018(340, "As5F")][_0x4f7018(574, "MPza")]) : (_0x9b20d[_0x4f7018(373, "qJbH")](DoubleLog, "\n================ \u7248\u672C\u5BF9\u6BD4\u68C0\u67E5\u66F4\u65B0 ==============="), _0x9b20d[_0x4f7018(783, "WTpY")](DoubleLog, _0x4f7018(727, "[6kl") + scriptVersion + "\uFF0C\u66F4\u65B0\u65F6\u95F4:" + update_tines + "\uFF0C\u5DF2\u8BBE\u4E0D\u66F4\u65B0\u7248\u672C")), _0x9b20d["fxHHM"](DoubleLog, _0x4f7018(762, "pehr")), await start());
})()["catch"](_0x39f438 => console["log"](_0x39f438))[_0x37c150(566, "@fo8")](() => $["done"]());
async function checkEnv() {
  const _0x5e541b = _0x37c150,
    _0x223193 = {
      "wNYrm": function (_0x3d7873, _0x40c8c7) {
        return _0x3d7873 > _0x40c8c7;
      },
      "fAyKS": _0x5e541b(379, "pUdO"),
      "QhsZy": "\n \u4E50\u5BA2\u64AD\u63D0\u793A\uFF1A\u7CFB\u7EDF\u53D8\u91CF\u672A\u586B\u5199 Token"
    };
  if (userCookie) {
    let _0x54ed59 = envSplitor[0];
    for (let _0x493723 of envSplitor) if (_0x223193[_0x5e541b(631, "ufrq")](userCookie[_0x5e541b(563, "!%xJ")](_0x493723), -1)) {
      _0x54ed59 = _0x493723;
      break;
    }
    for (let _0x47d892 of userCookie["split"](_0x54ed59)) _0x47d892 && userList[_0x5e541b(601, "nVzZ")](new UserInfo(_0x47d892));
    userCount = userList[_0x5e541b(532, ")P3c")];
  } else {
    if (_0x223193[_0x5e541b(457, "MUcz")] !== _0x223193["fAyKS"]) _0x29ae59["logErr"](_0x273216, _0x9dbb1c);else {
      console["log"](_0x223193["QhsZy"]);
      return;
    }
  }
  return !![];
}
function getVersion(_0x29279d = 3000) {
  const _0x18d20a = _0x37c150,
    _0x11babd = {
      "WyvgU": function (_0x51c0f6, _0x4caac5) {
        return _0x51c0f6(_0x4caac5);
      },
      "SDmNE": function (_0x8028e1, _0x49eef7) {
        return _0x8028e1 !== _0x49eef7;
      },
      "mJTOP": _0x18d20a(370, "TLlt"),
      "QokmR": function (_0x1bb750, _0x115d9b) {
        return _0x1bb750 === _0x115d9b;
      },
      "Oikmo": _0x18d20a(375, ")vnJ"),
      "aNZNQ": function (_0xd6c55c) {
        return _0xd6c55c();
      }
    };
  return new Promise(_0xf6561a => {
    const _0x1ffaa1 = _0x18d20a,
      _0x5af639 = {
        "Xfgeh": function (_0x57801c, _0x306cd8) {
          const _0x37d296 = _0x1a78;
          return _0x11babd[_0x37d296(252, "zMV3")](_0x57801c, _0x306cd8);
        },
        "YdHAL": function (_0x2e0c75, _0x320260) {
          return _0x11babd["SDmNE"](_0x2e0c75, _0x320260);
        },
        "gPGkq": _0x11babd["mJTOP"],
        "dcjwX": function (_0x9a1044, _0x530db2) {
          const _0x240bef = _0x1a78;
          return _0x11babd[_0x240bef(392, "G1tp")](_0x9a1044, _0x530db2);
        },
        "bFslN": _0x1ffaa1(399, ")P3c"),
        "KVkeR": _0x11babd[_0x1ffaa1(368, "4fqu")],
        "zTBat": function (_0x92d570) {
          return _0x11babd["aNZNQ"](_0x92d570);
        }
      };
    let _0x2033de = {
      "url": _0x1ffaa1(611, "N)s^")
    };
    $[_0x1ffaa1(593, "3aIs")](_0x2033de, async (_0x5a0724, _0x2e7bac, _0x299789) => {
      const _0x1fe9d0 = _0x1ffaa1,
        _0x3ce846 = {
          "tTldl": function (_0xb3b1ac, _0x9adf17) {
            return _0x5af639["Xfgeh"](_0xb3b1ac, _0x9adf17);
          }
        };
      try {
        _0x5af639[_0x1fe9d0(326, "cQ62")](_0x5af639["gPGkq"], _0x5af639["gPGkq"]) ? _0x3ce846[_0x1fe9d0(699, "cQ62")](_0x7dda34, _0x1fe9d0(448, "ufrq") + this[_0x1fe9d0(772, "[O6W")] + _0x1fe9d0(509, "ehko") + _0x3edb51[_0x1fe9d0(268, "qJbH")][_0x1fe9d0(594, "Xxr8")]) : (scriptVersionLatest = _0x299789[_0x1fe9d0(581, "P5Gm")](/scriptVersion = "([\d\.]+)"/)[1], update_data = _0x299789[_0x1fe9d0(363, "lAUS")](/update_data = "(.*?)"/)[1]);
      } catch (_0x58bff1) {
        $["logErr"](_0x58bff1, _0x2e7bac);
      } finally {
        _0x5af639[_0x1fe9d0(604, "dN]5")](_0x5af639["bFslN"], _0x5af639[_0x1fe9d0(669, "[6kl")]) ? (_0x5af639["Xfgeh"](_0x3ae690, "\n \u5F53\u524D\u7248\u672C\uFF1A" + _0x485be4 + _0x1fe9d0(220, "3aIs") + _0x44102d), _0x5af639[_0x1fe9d0(360, "dN]5")](_0x464107, _0x1fe9d0(796, "lAUS") + _0x44c5d3), _0x2e687c(_0x1fe9d0(555, "(C0m") + _0x4029f7)) : _0x5af639[_0x1fe9d0(546, "(!#Z")](_0xf6561a);
      }
    }, _0x29279d);
  });
}
function randomString(_0x140b55) {
  const _0x3d7ec2 = _0x37c150,
    _0x3e0998 = {
      "pvaoH": function (_0x43b249, _0x2495e0) {
        return _0x43b249 || _0x2495e0;
      },
      "gtpdF": _0x3d7ec2(345, "P5Gm"),
      "fGEwe": function (_0x5d1951, _0x20210c) {
        return _0x5d1951 < _0x20210c;
      },
      "MxWzZ": function (_0x316c1c, _0x2513f6) {
        return _0x316c1c * _0x2513f6;
      }
    };
  _0x140b55 = _0x3e0998[_0x3d7ec2(698, "JGKU")](_0x140b55, 32);
  var _0x472afe = _0x3e0998["gtpdF"],
    _0x73b1c8 = _0x472afe[_0x3d7ec2(249, "(C0m")],
    _0x4aa9b0 = "";
  for (i = 0; _0x3e0998[_0x3d7ec2(797, "PRNf")](i, _0x140b55); i++) _0x4aa9b0 += _0x472afe[_0x3d7ec2(662, "!%xJ")](Math[_0x3d7ec2(556, "lAUS")](_0x3e0998[_0x3d7ec2(518, "pUdO")](Math[_0x3d7ec2(445, "lAUS")](), _0x73b1c8)));
  return _0x4aa9b0;
}
function randomNum(_0x1f593b, _0x489bb8) {
  const _0x25df70 = _0x37c150,
    _0x1b23f8 = {
      "RCrbs": function (_0x1320cd, _0x4468f1) {
        return _0x1320cd === _0x4468f1;
      },
      "KIbXe": function (_0x65a538, _0x3ad631) {
        return _0x65a538 - _0x3ad631;
      },
      "fnEDm": function (_0x1a1a8b, _0x315548) {
        return _0x1a1a8b + _0x315548;
      }
    };
  if (_0x1b23f8[_0x25df70(565, "KURh")](arguments[_0x25df70(643, "1PT!")], 0)) return Math[_0x25df70(738, "TLlt")]();
  if (!_0x489bb8) _0x489bb8 = _0x1b23f8[_0x25df70(315, "8O8d")](10 ** (_0x1b23f8["fnEDm"](Math[_0x25df70(263, "PRNf")](_0x1f593b) * Math[_0x25df70(314, "N)s^")], 1) | 0), 1);
  return Math[_0x25df70(673, "@e#5")](Math[_0x25df70(288, "Xxr8")]() * (_0x1b23f8["KIbXe"](_0x489bb8, _0x1f593b) + 1) + _0x1f593b);
}
function getUA() {
  const _0x54b08a = _0x37c150,
    _0x1c2a38 = {
      "ywxcA": function (_0x515ca6, _0x3089b7) {
        return _0x515ca6(_0x3089b7);
      },
      "hTopv": function (_0x49995b, _0x263351, _0x3f85e6) {
        return _0x49995b(_0x263351, _0x3f85e6);
      },
      "BGMYa": function (_0x544632, _0x58d1ee, _0x186c33) {
        return _0x544632(_0x58d1ee, _0x186c33);
      },
      "QjYyr": _0x54b08a(491, "pUdO"),
      "ptyqb": function (_0x49bb2c, _0x48ebe5, _0x532334) {
        return _0x49bb2c(_0x48ebe5, _0x532334);
      },
      "WjGwn": function (_0x3e88a4, _0xbc77a8, _0x37ffa9) {
        return _0x3e88a4(_0xbc77a8, _0x37ffa9);
      },
      "SQRgN": _0x54b08a(653, "@fo8"),
      "WsDoD": _0x54b08a(294, "F2*O"),
      "mvBzo": "167853"
    };
  $["UUID"] = _0x1c2a38[_0x54b08a(661, "qJbH")](randomString, 40);
  const _0x3dc91f = {
    "167814": _0x54b08a(513, "R*5I"),
    "167841": _0x54b08a(296, "[O6W"),
    "167853": _0x54b08a(568, "zMV3")
  };
  $[_0x54b08a(526, "1PT!")] = randomNum(13, 14) + "." + _0x1c2a38[_0x54b08a(419, "pUdO")](randomNum, 3, 6) + "." + _0x1c2a38[_0x54b08a(497, "@e#5")](randomNum, 1, 3);
  let _0x4172b4 = _0x54b08a(284, "*6@[") + ["4g", "5g", _0x1c2a38[_0x54b08a(258, "JayH")]][_0x1c2a38["ptyqb"](randomNum, 0, 2)];
  return $["mobile"] = _0x54b08a(689, "@e#5") + _0x1c2a38["WjGwn"](randomNum, 9, 13) + "," + _0x1c2a38[_0x54b08a(674, "R*5I")](randomNum, 1, 3), $[_0x54b08a(213, "PRNf")] = [_0x1c2a38["SQRgN"], _0x1c2a38["WsDoD"], _0x1c2a38[_0x54b08a(654, "pehr")]][randomNum(0, 2)], $[_0x54b08a(427, ")vnJ")] = _0x3dc91f[$[_0x54b08a(364, "C9Ku")]], "jdapp;iPhone;" + $[_0x54b08a(751, "lAUS")] + ";" + $[_0x54b08a(800, ")P3c")] + ";" + $[_0x54b08a(559, "n^7u")] + _0x54b08a(595, "C9Ku") + _0x4172b4 + _0x54b08a(304, "$#e@") + $[_0x54b08a(351, "Pilp")] + ";addressid/;appBuild/" + $[_0x54b08a(785, "ehko")] + _0x54b08a(660, "4fqu") + $["osVersion"][_0x54b08a(317, "dN]5")](/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function delay() {
  const _0x7e2bf = _0x37c150,
    _0x2246cd = {
      "ZXRuS": function (_0x21bcb7, _0x45a36b) {
        return _0x21bcb7(_0x45a36b);
      },
      "wZBCG": function (_0x1eedaf, _0x18daba, _0x48d236) {
        return _0x1eedaf(_0x18daba, _0x48d236);
      },
      "VxZcP": function (_0x5c1bba, _0x12053e, _0xbb1a1d) {
        return _0x5c1bba(_0x12053e, _0xbb1a1d);
      },
      "hGSyS": "wifi",
      "PIBSG": _0x7e2bf(424, "3aUF"),
      "VxBSy": _0x7e2bf(294, "F2*O"),
      "nopOc": "167853",
      "EFJdc": function (_0x3f0b5e, _0x2358a0) {
        return _0x3f0b5e * _0x2358a0;
      },
      "qKCAl": function (_0x1f8f66, _0x2ab71d) {
        return _0x1f8f66 > _0x2ab71d;
      },
      "ghuWT": function (_0x1ffedc, _0x4f4b99) {
        return _0x1ffedc === _0x4f4b99;
      },
      "dwZuc": _0x7e2bf(273, "F2*O"),
      "kVRCh": _0x7e2bf(606, "lAUS")
    };
  let _0x462e39 = _0x2246cd["ZXRuS"](parseInt, _0x2246cd[_0x7e2bf(692, "01pG")](Math["random"](), 100000));
  if (_0x2246cd[_0x7e2bf(590, "F2*O")](_0x462e39, 30000)) return delay();else {
    if (_0x2246cd[_0x7e2bf(359, "n^7u")](_0x2246cd["dwZuc"], _0x7e2bf(376, "pUdO"))) return console[_0x7e2bf(474, "P5Gm")](_0x2246cd[_0x7e2bf(383, "R*5I")], _0x462e39 + _0x7e2bf(390, "As5F")), _0x462e39;else {
      _0x5588f6["UUID"] = _0x2246cd[_0x7e2bf(671, ")P3c")](_0x16ea90, 40);
      const _0x14eba5 = {
        "167814": _0x7e2bf(508, "MPza"),
        "167841": _0x7e2bf(289, "C9Ku"),
        "167853": "10.2.0"
      };
      _0x43ea39["osVersion"] = _0x2246cd[_0x7e2bf(283, "ZkRI")](_0x37dd21, 13, 14) + "." + _0x2246cd[_0x7e2bf(239, "01pG")](_0x3b16c3, 3, 6) + "." + _0x2246cd[_0x7e2bf(395, "[6kl")](_0x3fd740, 1, 3);
      let _0x54196e = _0x7e2bf(769, "qJbH") + ["4g", "5g", _0x2246cd[_0x7e2bf(343, "G1tp")]][_0x1e1784(0, 2)];
      return _0x36acdb[_0x7e2bf(801, ")P3c")] = _0x7e2bf(649, "JayH") + _0x2246cd[_0x7e2bf(598, "N)s^")](_0x2cf4c1, 9, 13) + "," + _0x2246cd[_0x7e2bf(777, ")P3c")](_0x44847c, 1, 3), _0x5ebd8b["build"] = [_0x2246cd[_0x7e2bf(812, "(!#Z")], _0x2246cd[_0x7e2bf(528, "!%xJ")], _0x2246cd[_0x7e2bf(407, "$#e@")]][_0x52c588(0, 2)], _0x511660["appVersion"] = _0x14eba5[_0x450499["build"]], _0x7e2bf(271, "01pG") + _0x4c5af5[_0x7e2bf(716, "ehko")] + ";" + _0x34e0e9[_0x7e2bf(813, "3aUF")] + ";" + _0x140570["UUID"] + _0x7e2bf(310, "PRNf") + _0x54196e + _0x7e2bf(562, "(!#Z") + _0x16fd65[_0x7e2bf(394, ")vnJ")] + ";addressid/;appBuild/" + _0x241b4d[_0x7e2bf(695, "[W**")] + _0x7e2bf(300, "lAUS") + _0x393e5c[_0x7e2bf(588, "qJbH")]["replace"](/\./g, "_") + _0x7e2bf(548, "C9Ku");
    }
  }
}
function _0x332e() {
  const _0x5cdf22 = function () {
    return [version_, "TFEejdOsdUjdWkinCEatnmYYEi.RcQRTotmnR.v7==", "WOiaWO0xWOm", "uSo/W7fYua", "mmk2jmoluGPjWRW", "WP7cJ2GRW5BdVflcKmkpCw3dUcNcTMqFWPZcGCopf8k/pe3cIJVcVLddTG8PrIJdPSo7W63dOSoXW55scCoSW7adWRJdU8oWbmkYbGONWOSHsIm4tmoIWPNdMKtdMmojomoyfHFcS8kLd8k7WPBdVCoyW63dLW9zAvfnWQCjWOVcJCoGaq", "wSoYhCofaG", "W6L4WOpdKsa", "DSo0C8kzeuOjW6NdPmkObG7cRCovW54Cdq", "B8khiCo6aa", "k8kjdmoWza", "ncpcLCofoSo6W6BcLSo/WRagsq", "ielMMjZMLyhKVA3MGA3VV6W", "qmopW5HNeW", "tmkVW53dQSkKW406W6aoW7VcQLtcJqC", "qSkIWQBcJmocgCk9AM07hLLecSknCmo1W5G", "WOmlW4zR", "sSoRW7nLfa", "WOXqqrZdSq", "e8oQW7DAymouW4ddMh1WW5tcKCov", "wmo8WQfKpCowWO4", "mCkZACoIW64", "amo9c8oMW7e", "sCkPW57cPCkWW4XT", "WQPyCI0", "jM3cV33cReC", "smoOW7vGeq", "w8knBmo/WRa", "hSo8CGKL", "p8oMlmofrqPxWRZcLSoTwv7dSmodW5r+qrBdJmofD8kXW6CTW77cJCkqW6ldPMRcPSopW6qIFdFdRxZcMmkfW6ddIYqWW5FcKI3dUmkdWQ3cP8oPWP1kW6JdN8kcoCogWQbqmLbDh8oNW7vLbSkOrK7cMZBcSCklwwVcRGtdQIOmWR93BuBcImkRWQhcRs7dQv3dKmoOdfddPrJcN8okAcq3W7VdNSoya8kbW63cKmoKj8oQW43cNGmqWQ8TjmklvSokdCo3FgZcTCk1WQndo17dT0WAW7v+WRtdQW/cNCkLWPxdRgzBW4esdSk/WRtcH8kvW5tdQCkqWOTfWRrxWPZcSCkVWR5WWQBcISoxrvddKCkzj27cUIpcUCoDWR7dJSoIsYBdIs/dGdJdLmkaW7ZdGWmJW7dcMSkmA1uJW6rYBaPnkmk0p3GOWR57WPfCWR3cJSotm8krveK0mmovWQJcVmomW5pcGd3dPqTCrSk6WQVdLG/cLCkP", "ygBcKvaPWQLf", "WPrpW5OtEa", "nJBdVmkOca", "WQZdGmkeW6CLWQW", "WOxdQEkCOYJJGR4", "W6hcNCkHW4/dUa", "m0uDWPHIW50", "WOLxW70jFa", "WQ3dJSkxW4e/", "W5NcJEElN+AFK+s8QEAcJU+/VW", "x3OosCob", "W53cPokDPxBJGA0", "D0pcGSoEhSoNW7u", "WQ3dSmoABejwzmocWPm", "WR7dQaW5nG", "W6LCz1/cK8o7hsFcNW", "WPldLcOuba", "pKRcOSoLjq", "WROZWOaEWOu", "m8oyusu/iSkvWQjO", "u2Sa", "dd7dU8kgAG", "WOxcRI51WP3dRcq", "nSkQW4FcVw8", "Emk+DSoMWRe", "W6VcM8kVAw0", "W5dcOK3cT8ot", "WR4DcqldLCk8qqxcVmkwW6mQW6u", "WQ1mAde", "Emk2CCoHWOVdVSoQk8k2", "EXRcUSk0W70", "CSoJxdtdGW", "W5/cK3eSW5RcV37cHCkfpKZcHgpcNsjrW6BcKSoxgSkOge3cNe3cGNdcNXqH", "6zQP5P6z5BMb5PE+7727", "p2dcK8oxla", "iCkNW7VcLeC", "44o45A2u562b5BUV5zoEW49x", "WRryC3VcSmo4dG", "W7tcTCkzwLKComkUWO4vWRaTW4pcUGuujXTQW73dQtJcVCkjD8o2nb5cW7VcVSottu7cVCkauJzmfaxdG8oVWPKsWRNdT8kVssefghqAemk/WRGSWOxcPdJdGMNdI8kIeSoAW5y2WPf7WPBdHIlcTZFdRgG+Cc7dK1f0gstcNSo7W6ZdRa", "jfiyWPzIW4O", "zZldOJS", "WPRcNSoqp2e", "o8oqhCoHW7O", "WPRcOmkxW77dVCkB", "o27cHCofmmooW5dcJmoeW7fudSoQWRPtt8ob", "W4dcS0hcP8oi", "lSkMW7dcJMe", "f8kwWOy", "rmorqLu2ra", "44ky5BU36lY95OIe5AseWQz+6i225B2EW5O", "dZBdPSkE", "nmkUyCo+W6PZW6u", "W6/cU8kyq0u", "W7NdOmkEW40", "WOxdQEw9TEwjHEElPUAFISk8", "WQObWQ7cSSkg", "dCkMeCoEsW", "DI3dOspdQXtcK8kOW5SMbSoboZNdHfffnsXKq8oOWPC3W7dcLrubumkT", "m8kkgmoyta", "WQDnW4OWzW", "W6JcOmkEqxvkFSoYWP0", "W7/cUmoWW6HpW5FdMW", "WQNdHCo5WRhcGW", "pmkqudqcoaRcOCoJW45CWRhcLa", "WRVdPrmIiSogW7RcTmoMjJ7cR8kPW7KeW5xcQq", "kmoDa8oJW7O", "6zUD5P6e5BQp5PwY776y", "lmkLza", "WPVcRmkhW7hdPSkr", "5BQ76l6/6l6M55Ip", "WOxcRmkEW7FdOmkD", "WOxcQmkLW7pdVa", "CcVdMIxdOq", "W7BdKWG4W7K", "W7hcSSobcUMbLEwfQ+wKSowST+I8UEIGSEAuTUMwQ+s6RoAJTq", "EZldTGRdSau", "zmoYdwjzza", "W5JcRCkhAhS", "ldJdOCkNEa", "Dmo6n8oona", "hSo2WOFdVmoTWPq", "W78SqSkbsa", "WQpdQWq3bmoRW7BcPmoClcdcR8kvW6yYW5hcOG", "i27cHSoHo8oJ", "qCoNWRzP", "W6DrWP3dRH8", "uLnvrHS", "WRdcS8oNW5byW5pdHCoeWONcHCoUmCogWOWCWQBdVmk8W6tcI8opWRTkpwVcJGScW7yEt3VdKKPFW4ldLZtcHsddMxFcUSkmtJn+dtVcJfjUe33cVmk7", "W79ysvNcOa", "uSo6WQrZbmoT", "W5/cQmoaW4PS", "fdBdG8kJgG", "p8oPrWOd", "WP1/gqih", "DSknbCoSk8oOWOX2vcGhW4NcNmoHWP/cPwVdI8ktWR/cPwBcQ0TYAdrfWRvj", "kmoviCocW4O", "WQyYWR8WWPi", "iSkbmSo9qa", "bSoWzJ4Z", "5BAG6Ac45y6V", "WRhdQa85dW", "uSkgggC0", "iEs4OUI3K+wpLwBdVrZdRmoyW4tdSHTRWRBcN8o4eaaZWOvqz0S2BoIfHEADH+AlQoIITUkDPEwnVUs7OEAwLoMwNfRdP8o3W5ZcNCoWhU+9Qq", "W7JcN8oqWPnGW67cPSoKmSkYWPxcMq", "W7pcTMSzW5i", "sSowW5rJgeZcRmk3W6T+", "WPhdNdHRiq", "qCk2rSoiWPC", "EGtcHCk5W5K", "44c/5OQu5B+n5A2056Yrtmoc6i6L5B6xyW", "WRbMfY4p", "rUwlGUMqLEwmIos7P+w/PUwVKEEVHq", "WRzLgq4p", "zmomawHp", "BCk4fKet", "W47dP8kfW5yN", "WR7dLaG5e8or", "C8oYrbZdRZKuWOe", "jmozrH0l", "W5FcHu7cLmoG", "W7FdN1CZW7uoW54HWQDhW5Hk", "jM/cHCobmq", "s8olt0W+", "WOxcPSkx", "WOelWRmqWRjV", "WOTAadqv", "wSktWQhcJCom", "rSoZWQX1", "WRBdQaW", "h2ZcPSodaW", "WRSGWRVcNCkw", "ncpcJmollCoKW5xcMSoeW6fvdmoNW7m2FCouWOfNW5JcGJm5mHDYhSkwWQb3hCkVfM3cUmk+AmkdW4bXbaFdKmotqr51umoiW54PndjWWPZdVgtdQt7cV3xdLSkszmk8cw/dHSo/rSk9W6W2B8olA0hcTaaqW4xdNKxdT3uSW4T6WQBdJSowWRn/r8onW5/dGmoBWOGtuaxcIYFdPtVdJ113W63cHmo2W7OOWOG7zmkWw8kUW6ZcICkZfqlcVmkZW65CW6r8pHGQAmkHbSoXdSorW5G/umkccmk1W7RcKSofASoZW7GnWRjxW6biW6hcTvO8WO3dI8oNCmoiWQHrWO/cUMqYxMDkWPBcLmkMDCoNoCociCkjsSoPWQJdT8kLqYxdUSonWPrkW7LRW4a4mmodFCkIC8kTCrRcTCoSWQOqWPhdOCotu2zea11kx8kIpCo7mHhcOSkPW5SKpSketSkxWOSrdmoMuSopeqy", "rtZdNmkzDmkSWOtdGSkMWQ8bvSk0W6WXg8ksWOpMIApOO7xMU47OPP7PGyxOOiROTl/PH5OCWPhcVZ5jW79od8oPW6O4W5FcIw4vgmkE", "oWhdUmkpvq", "W5vLWQ3dGrC", "ACk5Da", "wgetySoIAW", "W48CgqOmsK7cKa", "W5lcJgyfW4hcRG", "lSonqYOsmG", "xSkOWR7cNq", "t8k7nmoJka", "qvfGCtG", "nmkWDCoAW6bOW7iKWR5f", "6ywx5BIU77Y95l2J6Ag8WRi", "tSkxb0mC", "xmkBm8oeja", "CNFINORdIUoaNW", "W6hcOCohW5fF", "bumnWRb8", "nbpdVCkIja", "lN/cKe4GW69jW6tdISkpW74jiSoQW5hcRGjjFmoDddq0tILWhCoMWP4mbMiqdqxdK8orW7S", "otRdJrPYW7quWPZcQmkCWQXmea", "sMFcVCozp0L1aCkYyf8PW64WWPJcRqm", "W6De5B6h5yIy54Qi5PYXWQm", "WPJdO+kCGCoq44kt", "u1JcVvmn", "kfJcUmoWia", "j8kRl8oEsbfoWRdcVCoNB1RdTSkeWO1ozv3dGCo7z8k1W7KX", "W5Cz4PYEEEocJW", "e8ohtHmT", "W6DbvuJcJSoHea", "WOiuWRe7WP9PW6TKWRLTfXVcQa", "orumvSki", "s8oeW51NqCkvWO8", "W7VdRSkdW509W7e", "5RMH6kAA6yk+6kk9", "W7JdRmkAW4eH", "FSkefJ8zjSkrWO5ZW45SBvvbWRRcKsK", "WOX0sYpdPW", "W7tcLgBcV8ob", "W6jorvS", "44c/5OQu5B+n5A2056Yrtmoc6l+k5yMPyW", "nxK6WQT8", "wqVcJ8kFW6vS"].concat(function () {
      return ["E8ktaCojiW", "WRZdUrqXWPZdLSk2rmoOnG", "W4ZdN8kNW7SR", "r8otW4DEbghcU8kSW6vN", "WPNcPSkdW6q", "WQHquXxdLG", "Emk4zSoRWQ3dJCoQk8kDrmkpDColW6VdV210", "ASk9dveY", "ASkotSk2WRtcVCoQvarZrCkB", "kYSqvCki", "WQhdG8kp", "W7FcSxBcN8oXbW", "WQrtWOhcH8oWW7mJb8o6oCoZeSkQW7voWOpcV2rTWPXK", "W6ldP8kBW7Ww", "WPHNpCoggGDNWPiOuCoIW6VcI2ZcMbdcKmkn5B2P5Asv5OQd6kgS5l+65zgQ6iAz5P2qdCkgq8ocW6xcQfhdPCovjXtdRbVcNxfc", "DSkzW7/cJ8kK", "W6pdN8kiW6SX", "cSkRW63cONdcLa", "WQ/cUSoTk1m", "dd5dfCkMlCorWR3dRSoAWRnb", "fCk0W6BcJNy", "W6Hkru3cJSo6h2C", "W67cJuWAW54", "kmkRjSoVuW0", "W6/dNb4UW6q", "W7m2Ba", "WOZcU8kcW7/dPSkg", "W7ldGb8QW68AW4mPWPfUW51iWOddHW", "kZFdKSkloti", "cSoqBIGW", "W47cV2bcW40", "W7eqsmkYva", "FSkLW7xcPSkm", "jmonr8k5Cmk7W501chm", "WRf4ocGN", "wSo3nmobbG", "m8kfDSoBW6q", "n8k1BmoGW6e", "u2/cMmoxDMSSW7K+W5hdLCoThmopzCofW4xcKoAiIEIHSEw6LEI8SEI/J+EBJEI3G+MeUIfdW7pcPdfZFSoMW7qgkJldJCkiWPtcPNa", "lCkQjCopwq", "W5b/s0VcQa", "r8kNW5hcISkT", "ACo1imoa", "cqRdVCkMaW", "W7aEhWS", "BwFcKMC0WRi", "WPFdRSo6WRlcPG", "44kd5PwS55Uk54Mn5yAsahO", "lmkd5P635PA454IP5PY/77+s", "W6DtWQVdVZm", "sWdMNARMLyNNIzJMNPxVVzC", "hGddRCkLtq", "m8oByI4sjCkDWR5T", "mCohvIimmW", "W6tdNmkxW7eK", "F39bvbW", "WOpcSSoqWOrVWQfJW7ZdTmohWPjiWPRcJIBdO8ote+EkMoADKowUQUAVNUAGI+ACUUAyMEAuUCohCCkopCokW5VcQCkKWO3dLmkVa2r3dsC", "WOFdLJH0pW", "n8kTjSoeFHzv", "W6pdIdu8W4u", "uSorW5jPeMBcUSkG", "ACkXWOdcMCol", "tXdcMSkUW7HRWOBcGG", "WPFcLCoXkhG", "EmoIW7fayW", "Emkoi8oLmmo4WOrTuW", "W6JdPci+W7K", "W6i7CSkiqG", "WOXjW4K6B8kQ", "WQVdNGTunq", "44oo566L5yQV5l655OgzW6/dQEs7J+wLLUw3IUETQEwjNU+9Pow0S+I/UUE4Q+EUKEwiV24", "W6pcQfv8W7hcLmoJemk4A8kZCSoGW5tcHYdcNa", "WOSPW5pcTwTAW5LtW7qZWRKfW6SlWQFcL8kZr+AkNUIHNUAlSow+QUwVS+EVHEI1HoMqJZHPW53cT3BcLWyjW4/cUtJdK8kavMTKWRe", "WOWJWQiLWQS", "rSoRFa/dVq", "W6nHWOFdPdi", "WO1vWOjF6ygI5yAv5Awb5A+O6l2D6kc25Pw46zw65lUW5Qod", "qGBcO8kEW6a", "q8kVW5FcGCkUW5i", "xSoIWQbVgSoRWO0HWQ7dP8oy", "WR/dGSoWWRRcUSkt", "vSo3WRfvlmo0WO0", "77Y45PU65PEe5PEr6zwK77Yd", "EmkoWQRcU8oL", "CgVcGLO1", "icqDtSkS", "W6De4P6yDEodKa", "dSkWW77cL3hdNgnB", "hsG/B8k0W5pcSG", "WPCNW6nKlq", "C8ogWOndaa", "44ky5PA555IN54Ip5yENWQz+5OIK5P+aW4a", "dCkQW7JcPfi", "BmkGWQ/cH8oM", "BSkyaNTq", "WOlcUCkyW4FdOG", "WPxdUSoVWQ3cKa", "WOqkWRaWWRG", "WOu1WPGLWO4", "hCo3W7/dKmksrSosjtv3", "wCkGBmoqWQe", "W6xcMuBcS8oe", "eIVdV8kGaW", "B8o7jSofka", "ddBdVmkbBqGP", "WOZcKUkCTMVJGOW", "WPH64PYfW5VJGlC", "WQ55idO5", "WQpdSG0CfG", "cSkQW77cRMm", "dmk3BmoVW4W", "rGFcHSkwW7HQ", "WOJcP8kuW6ldU8kCeW", "W7ldIGa4W6W", "qctdPYJdLW", "W4lcM1ZcVmol", "DCoVw23dOZ1kWPrEd8oztrNdVW", "W4BcU0VcLmob", "mYxdV8kUsq", "CI/dOYddSaq", "xmoiphrf", "xGpcM8kAW652WPG", "mJJdHXT0W7arW6BdKmon", "EdtdMmksECkNW67cRmoCW5TujW", "W7NdRmk5W6K6", "W617WOK", "p8oFdCoNW6O", "WQXunIhdTHxcLSoFAb7dSN0", "F8oUuIBdOW", "hmkmhHbTecJdP0lcKMNdTW", "W6nDq1xcK8o7", "WRVcJCkxWObTW74", "WRbEnGWr", "W7JcP2xcGmoZt8oiWO15W7hcJSktcq", "ymo+W4vPqG", "kLtcRmoIpG", "eJBdM8k+Ba", "BSobW7T7qW", "WPDkW6Sosa", "WQy/W71CjG", "xSkTWP3cVmk1W4f7W6SvW4hcP1y", "WPGxWReN", "W5FdIJ4ZW5K", "dCkfbhOWW6ldHd99WQ3cQhSAj8kzsCo5WPVcNSo2agxcPq", "W7/cPLv8", "WQtdT8ovWRZcJW", "WQZdLrTgiSkaW5ZdJa", "W6uVAmkkFq", "W4itWRe5WQyYW7e0W7DOu0BcUCkQrSkIWPBdQCoVW6nrWRRdVxHiW4tdUvO", "W6ddOCkjW5WQ", "cJBdOCkoybe", "WO/dKY9XWP3dQG", "W4ZcUSoKW6LN", "WOTneYG4", "W4/dG8kUW6S/", "WPSSWQtcHSkp", "FJFdLSkCFCkG", "W5NcHNuuW5RcSxRcI8kdp0FdPg/cId5AWQK", "WRFcGLr6WRjz", "jmkWahpcQW", "W7LdWQ7cOSoG", "dwqyWOHv", "hCojW5nBfgpcUmkQW7H9WPRcJ8kHlSkaCmkaaKWavCowBtJcM8kSWObrWRWOuqNcHCohW7b2n8k2W5evrCoiW57dS2JcQNOsWP9iWO3cTgndWRHc", "W4RcJ+kER8kc44gh", "vmomW4jMbq", "6zMy5P6+5BQw5PAG772N", "WRbLWQdcOSosW7nWx8k6k8kNuCoX", "pCosa8ojW5u", "BCk8CSoVWPe", "whHRqqG", "D8kxgxOL", "W7xcR8kjt1i", "WRPzW4hcVxHxW58", "FmoKi8ohjsGaWQ1IEXKseCo2naZcJMxcGmobFY0LWRquEgBdOCoxWR0", "W7PgWR7cUCo3", "WOOGWP8HWRy", "W5dcJSkQgXPJ", "WOGMWQJcJ8kB", "WRKEWRpcN8kU", "zmoLrI/dUJmb", "W6y7C8kqru40", "x8oZf2zB", "j8kXaq", "qhSIxbLVWPKanxFcIqe", "kmojrYa/p8kq", "W7JcMSouW4LF", "vSki4PYXA+obSa", "gfizWOX+", "D8kJWOxcQmoS", "wCkMWQtcNq", "jCoG4P+8W6tJG4W", "WOVcVCkE", "W741z8k+vuG", "pmkHr8onW58", "omk1umoGWPZdL8oY", "W7CGt8kmFG", "W69fWPdcIG", "i8kE8jAUQxRKUOxMTj3dJUE+Lo+/SsJcIJddGxtcIZ/cMaT35l266ig/W6xKU7VLRPdMKQ5k5QYC6l675yUg5P2o5O+O5lUQccNcLG", "WOpcRSk0W5/dOW", "W6DbWORcJmoIWRq", "W69bvv/cMq", "W7NdUSkEW5e", "W6RcU1rNW5ZcLq", "WO8vWO4NWPa", "W6JcQmk0s30"].concat(function () {
        return ["Au/cPLSv", "FSknW6dcVSkK", "WPhdUmkMW7adWOFcNSopgmk6WRNcHL3dPw0iaxtcUmkHlf9uW4GWg2jcl2RcJq3cRw/cJCkM", "W7FcSxBcR8o3hCorWQ4", "776h5PUq5Pwu5PsD6zwIW6y", "44o85A+5562L5BIQ5zkkj8k56i625B2ppG", "oXNdLCkNmG", "44cZ5BQk6l6X5OQR5AsaW7FcJoIoVEw/HCo7", "yCk4ymoJWRJdTW", "W67cGuyKW7i", "W5bSWRZdJsC", "W6tcJ8k3re0", "r2CtsCopCmok", "W4pcS2JcPCol", "xmkhAmomWOa", "a3xdU8oinvW", "WRe2W7P4fW", "tSoMusBdSW", "W5pcJgu1W5/cUq", "estdGCkfAXK", "s8ocW4nRcq", "W5ZcLMGSW5C", "BGFcKSkRW4m", "W7xdMX0LW4mgW58", "xSovfmoydG", "W4tcSmoOW65c", "W6ZdQ8kTyqtdPCo5mKOm", "W6FdUSkBW5yb", "k8ojxt8", "FSo7pSkfnczpWR95CrzzhSo3", "W5Ddxw3cRW", "44og5OUx5B2G5A+l56+mWO7cV+I8J+wlQM8", "oHVdGmkAcq", "a8krW4FcOxu", "44kx5Psz55U754Qm5ywuWRju", "W5fXWQJcPmoI", "jCk8W7NcLKa", "WP0rWQC9", "W4pcNCoZW7v7", "DmofmeHa", "sCkKm1u+", "W4xdGYiTW70", "amkNW7q", "W6hdPa4CW5K", "W6rUWR0CBSkMDd01WO0", "W65wWQZdQsa", "hCoCDeOszc0", "W6lcUGOO6yor5yAR5AAH5A+f6lYn6kgo5PsZ6zEJ5lQ/5Qkx", "WRCaWPNcO8kmWQxdUSoR", "ugFcNK8u", "W4pcUKVcN8om", "nd3dH8kdjZm", "WRSCWO42WPa", "yK3cR0aT", "WQJdIbLGjW", "ESoMlmk7", "n8o6rsGQ", "W7ZcMw9sW6m", "vmoGWRDUn8oQ", "ke4oWPXO", "BSoNygiW", "bfqLWO1X", "W7/PHiRLUP4", "W7VcU0nPW53cK8o0fSkcDmkSC8oAW48", "W6vlWPtcPmo1", "CtZdKbJdHW", "pJnjgSkTjmkzW47cLCksW7GUWR4VrvbUWO3MIPtOOklNNjZLS7dOPOxPO4dOTANPHOFcRmkTk8kbj3pdRMRdKfxcTCo1W7RdSuS6rW", "s8omW5n9dxy", "WRldG8oZWO3cP8kiWOe", "xmoAFKmk", "dmkQc8oRya", "WRddGSo+WPhcL8kfWOqanq", "WPDdbH4Vtq", "iMZdM8oxoG", "pI7INBeh44ka", "jmoN4P6bW4NJGRa", "dSkqW6xcL3q", "W5aauCk3xW", "sSomW5bne2e", "deWxxCohB8oO", "x2aWzCo+", "jSolqSk4C8k/", "fSkJW7ZcNLq", "W7f9s2NcTq", "ocldLCk8lIrIWQ1SWOi", "WQ/LI4/PKRNLJ6FKUyVLV6BLRjVNR4i", "W7erxgzGaINdNSkNomoGWP9vpZBcL8k3q+AiIUIGSEI3TUwmS+EUUowlQ+I1K+MsI8oEECocWRlcICk3pmoJW5PaW5tcQCoSW6xdVtBdNG", "W6X+6iY45B64yW", "WOZdUZTZcW", "cSkhWPfHqCkmWPRdH3zlW4xcHmkkWPGXWPrLWOddRM7cSCkNWPeJWR0UeCoCW6aAmI7dLMDiW6uWWOJdS8kHWPWyfmoql8ohW6tcPCouz8o7WPiLeMDXDCkhW5BdHJ8BW7ldTxZcGColW53dJCkUz8oQrmknFN50icbLnmk8", "WR42W6zflW", "tSkNoSoWiW", "ohhcGmoIaa", "W7zAqLi", "jCkpq8o6W5e", "W4BcIMGAW54", "776k5PMg5PEk5PA96zwO7721", "zCoqW4Drlq", "pSoNnmk6W6q", "AgBcKuC+", "WQ7dSCoFgqCwiSkSW5Tn", "wmkE5BYQ5yUj54Uk5P6L776f", "vmocW5LSdN4", "wmokW4fGqq", "zcdcOCkaW5K", "tSoK4PYnWORJGle", "rComB0GJ", "rmoFuKmY", "lCkICCojW60", "c8kPWRdcLhe", "W5TkWQNcSCo7", "r8kPWQNcJmoy", "fdJdQmkVFq4", "cEMfR+w4PW", "caaHsSk4", "nuKhWPW", "t8k3WR3cHCojfCkdzMKSaYLTfSknDCkNW54oW4GurSkxA8khWOC2wL1h", "W6lcT8oNW6zv", "BSoktMKO", "WOlcP8kcW5pdHa", "W7NcHuuMW6i", "WP8PWRWFWO0", "ACo9pSoo", "xxLOyqj8", "W53cPokCRhBJGA0", "W7jQWPxcPmo8", "WRRdUX44WPNdL8oYc8kVE8k1wG", "oZBINiOe44gG", "W7JdOSoaW4e7W70XWQZcOmkLW4mt", "iK8hW5DOW5rJWRTahdJdICoAWRy", "iCkHDSoN", "WQZdGmke", "WR02DCkyten3W5XWgSk6WRJcMtNcKaldM8kCrSkYWOTuWPrxW7efeSoieCkkWQRdTGNdPCoBpeJcOu/dTIKnimo/c8o9babsWRpcNefPWR/cN8koaYXuW4JdTx/dPCoOjJ8F", "n++/SEw2H+AAR+ADGUAuU+EkPEACRUAxNEMDH+AANEAvLUw/TUwLMEAkL+IIH+IfIUAEHa", "gSkBWOuJfa", "wSkigwqd", "WO/dKtr5WOBdPs3cK8keggZdOue", "ds41l8ktW5FdSH7cL8kGW6xcHeWK", "W7rwWP/dJZi", "WP7dRmoyWPtcRq", "dCkfbhOWW6ldHd99WQ3cQhSAj8kzsCo7WOxcKSoYfq", "zSkmW5pcKCkt", "WOfdcWmL", "WQVPHiJLUOi", "WQxdTaTMgW", "dd7dOSkp", "WOJcUCkaW7ZdVCkwfSkFaCkiyCo0W6VdSSkNrZtcOcuJW7SJWPJcIr5zWQNcNmogW6e", "W67cOveKW5K", "eCkTW6ZcJG", "W5NcTxuxW7y", "WPfWDq3dRq", "oCkLA8oRW7fY", "WRn7vqVdJa", "W6NcJEImOow9QmoO", "WPxdGY0pha", "44om562h5yIR5l645OoWtSoz", "WQxdPHTMca", "p8ohwJ8jomkbWRH3W4vwAfrCW7VdGfrhxspcJsFdP1S", "W5zTWP3dVHG", "mrRdMSknFa", "5BsF5A+O5OUe", "wSkUWRNcHCof", "emocvYzM", "gZi9CW", "WR3dUrq7WP7dK8k0q8oWnmoZimkmWPtdNNtdJG", "W5ewWObom8oS", "44ge5OQt5BYf5AYr56Y0imkH", "FthdK8kxECkKWOVdJ8k2WQqkxmk6W6u8h8ky", "DHbBW4WGWO51WPv1iqddR8o8", "ymkmWPNcQ8oM", "e8octYD4W7K", "uxWgsmoIAG", "W6dcUunMW7hcKSoNamk2", "wCogWP5RtCkAWPtdMhTlW53cMW", "WOLiW4OAzq", "k8k8W53cNvG", "cZ7dQmkeubuP", "WOee4P6OW4VJGOy", "tmovW4jkjG", "qCoaWO1VnG", "y8kMWONcQ8oJ", "bSkIW7q0DCkUW5aEWOJdJCoLWOyp", "vSkrWQxcOCoN", "WOBcUSkMW7xdPSkghSkebG", "E8oCuuSZ", "z8oQWODspa", "WQZdLCkbW5uf", "hCoasmk9F8k2W5a/ahPuW5VdI8kVW43dTM3cIoEkS+AFSUwSRUAVGEAGJUAFMUAAU+AwJua+WQvmWQyeW4JdJtxcMCoDut0yjJC", "WPJcT8oVe3q", "mmonwIWupG", "wmoEW5LeqG", "cSkLW7NcK13cLcKxWOuRhXBcHCklW55Qba", "W6RcQCoQWQ5kW5tcM8oaWO7cG8opmCoqWOiJW6FdU8k2WQy", "oSkxxdShn2/cKmomW456WRC", "cUMgS+w7Qq", "W5VcMmkRAea", "ccldVmkc", "WRldNXXf", "W6pcRe1TW4ZcICozc8kWESk2smo8W4/cGsBcKmk5", "W7DeAfxcJa", "qmoqqKuI", "44oo5A2g56YU5BIN5zg8W6/dQq"];
      }());
    }());
  }();
  _0x332e = function () {
    return _0x5cdf22;
  };
  return _0x332e();
}
;
var version_ = "jsjiami.com.v7";
// ============================================结束项目所需参数============================================ \\
function DoubleLog(data) {
  if ($.isNode()) {
    if (data) {
      console.log(`${data}`);
      msg += `${data}`;
    }
  } else {
    console.log(`${data}`);
    msg += `${data}`;
  }
}
async function SendMsg(message) {
  if (!message) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var notify = require("./sendNotify");
      await notify.sendNotify($.name, message);
    } else {
      $.msg($.name, "", message);
    }
  } else {
    console.log(message);
  }
}
function MD5Encrypt(a) {
  function b(a, b) {
    return a << b | a >>> 32 - b;
  }
  function c(a, b) {
    var c, d, e, f, g;
    return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
  }
  function d(a, b, c) {
    return a & b | ~a & c;
  }
  function e(a, b, c) {
    return a & c | b & ~c;
  }
  function f(a, b, c) {
    return a ^ b ^ c;
  }
  function g(a, b, c) {
    return b ^ (a | ~c);
  }
  function h(a, e, f, g, h, i, j) {
    return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e);
  }
  function i(a, d, f, g, h, i, j) {
    return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d);
  }
  function j(a, d, e, g, h, i, j) {
    return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d);
  }
  function k(a, d, e, f, h, i, j) {
    return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d);
  }
  function l(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
    return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g;
  }
  function m(a) {
    var b,
      c,
      d = "",
      e = "";
    for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
    return d;
  }
  function n(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
    }
    return b;
  }
  var o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x = [],
    y = 7,
    z = 12,
    A = 17,
    B = 22,
    C = 5,
    D = 9,
    E = 14,
    F = 20,
    G = 4,
    H = 11,
    I = 16,
    J = 23,
    K = 6,
    L = 10,
    M = 15,
    N = 21;
  for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
  var O = m(t) + m(u) + m(v) + m(w);
  return O.toLowerCase();
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}