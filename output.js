//Tue Aug 06 2024 03:07:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
//薏米第二次解密
//第三次？
NAME = "\u858F\u7C73\u77ED\u5267";
VALY = ["ymdjck"];
CK = "";
SID = [134118, 134119, 134284, 134156, 134155, 134154, 134153];
SID2 = [134152, 134151, 134147, 134130, 134124, 134141, 134136, 134131, 134125];
LOGS = 0;
usid = 0;
var 蛋炒饭_0x3e11b0 = require("jsrsasign");
nowhour = Math.round(new Date().getHours()).toString();
Notify = 0;
var 蛋炒饭_0x3111aa = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKfK7Bnh1RSHYZZRLI2WormV8rXdj0B46gu1NOiOGQJp0wbVwDVqc0rRs6+C2TcnVEx+ElVh56d29gqtIrVHaYYKP6tBo/OveSBa9McXhQd/Jbn5+1YchaMdArqk6gd663Lmjhsk6ROOZqXWFZatITzIODo7Uz9HpKnnMbCqQ5QtliBln+CKx47H++j5lgCRb6FIAmTazBwzX4Yox/AubcbC4R8P8SS7jSxRLt1rvEokCBntUrm61mutQ5tOcQ+vjh3W/KoBkLQQ2sElSLB1g7KRHbX9A/tn14grbJrgEJUY6NfM4YhuSeRcwx2aMZaQAPpAFAcDJY74IgclkIXWT/AgMBAAECggEAZhEhWfGkn5NiDHz5UgrdzKpb4ZVFxgSFLZofbQfsg2gjdgS6C+jDEfdsMXZmKtvYJtqGL/bQGDVaDCUvGa5StY6JOddNH7BOmOmKqoLL/evoW60DqT9n6acQYuJPDe4mQKoBLjteBS/kXZtCdfs1d8twQ4vizBShDDoAlZHwo/eb3HLUsswC01MT8AmtyQXphVMZRlC1wwXDxMsQbB5DJQ77dP0VV05ekb2XTTSd+488fWkqa8nOWqg/yuVfQTkAh3mnNIBQ7gxxKvb0aczS5yeIVfJQvTdvevnKiTc3zg2qjS5/PIZ4KXblj/AmSv80BQ9vxqlMmthlEKg93JOa2QKBgQDonSZJbQkkeseFY80kdEnHC/88uzV3HhTAJ1SL/H5eaoIMDHa2QhnYYGWu/ELuSsGGxt1KWKzRs+IL0ymF5Jfta0/dbKyVKNmEMh/uvI1X5d/rT/BJcUIElaKsmGABkWtX5VBEaGa8FFLav7SrF68Z0e4B3pRvnRTTsjTQQCERUwKBgQDe2CZ5Zw+XP6aHl+mpfq1uJJZU/ZydS/5Rp19Ih+vkUaE5E3IRSznSIAbWkt+DLIOpwMmmP9FHHdpeMcsV/Ali+wrXswUGfzmstaOjVp2MxmBhHFAFJ9Wut8Ns23uCfgxxs1EyYjFPYwv5Llb7OLotoEd6P1+LTy1gHX9Yd2IMJQKBgQCGVRKiPqST+4+zmaIDlmBw4Z3Bnb9PjgCfw1bRDLyRm+KEQMJhmKTCT1EJj8a7RFKkmb17zN/oroAxIf4Nw6h1RI63qaW08gVDkYrdXOgnRapdgymZ0B029o8eK1TuMuORu+zxxHTn0rjSePlGAQRu3cwcKkUAe+9mHbjgNtih3wKBgQClqygfRUFP/l/9mjB6c9TXd5fTo5/VSPPPHJE3yOTUHuOvHQfGV5iq4Gh1CUflqyhPASZo1DTvnAAF2xrSQ0dvMJdE+LAZvmfQQFFhUzlZuPlZ+MR8sLqpY7CDs0BFKRRzSw5oWJu0GzyBibPcnLW8ydWZypdrZ/eh5wwPZuGbiQKBgArZkZ685pmCPRmD3/OQgCzS4a/LtuzOvpa9L1DEukAFFSSnIoEI3uQM1GVF3T7y5Dk28USJ5aX9HxPC/Z6uhuxTe6NLxtAJ+7aNrCHwD9PvgdRYyc9YeQawm3Ndk78F/gefhbhoi1whX/WKmWkayg5pvaLyxZCZNrfWLzj0GMDS\n-----END PRIVATE KEY-----";
function 蛋炒饭_0x4368c7(_0x546b2a, _0x2607fc, _0x16203b) {
  const _0x55adee = new URL("http://test.com?" + _0x16203b);
  for (let _0x592dcd = 0; _0x592dcd < _0x2607fc.length; _0x592dcd++) {
    const _0x3f6dfa = _0x2607fc[_0x592dcd];
    _0x546b2a[_0x3f6dfa] = _0x55adee.searchParams.get(_0x3f6dfa);
  }
}
class 蛋炒饭_0x25588c {
  constructor(_0x1245aa) {
    this.url = _0x1245aa.split("#")[0];
    this.txtype = _0x1245aa.split("#")[1];
    this._ = ++usid;
    _0x1245aa.split("#")[2] ? this.f = "\u5C0F\u4E3B [" + this._ + "] " + _0x1245aa.split("#")[2] : this.f = "\u5C0F\u4E3B [" + this._ + "] ";
    let _0x3ab5dd = ["usr", "rgt", "pc", "p1", "p2", "p3", "p4", "p5", "p7", "p9", "p16", "p21", "p22", "p25", "p28", "p29", "p30", "p31", "p33", "p34", "p35", "zysid"];
    蛋炒饭_0x4368c7(this, _0x3ab5dd, this.url);
    this.message = "";
    this.logs = true;
  }
  async ["getsign"](_0x160844) {
    let _0x32b2a1 = $.getSHA256withRSA(_0x160844),
      _0xbdd806 = _0x32b2a1.replace(/_/g, "/").replace(/-/g, "+") + "==";
    return _0xbdd806;
  }
  async ["userinfo"]() {
    let _0x728bd9 = $.time(13),
      _0x55633c = "&account_type=0&gold_type=2&p1=" + this.p1 + "&p16=" + this.p16 + "&p2=" + this.p2 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p3=" + this.p3 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p35=" + this.p35 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&pc=" + this.pc + "&rgt=" + this.rgt + "&timestamp=" + _0x728bd9 + "&usr=" + this.usr + "&zysid=" + this.zysid + "&/welfare/gold/user/gold_account&" + _0x728bd9,
      _0x4dc26e = await this.getsign(_0x55633c),
      _0x56de38 = {
        "x-appid": "zy9351ae",
        "x-sig-sign": _0x4dc26e,
        "x-sig-alg": "RSA-SHA256",
        "x-sig-timestamp": _0x728bd9
      },
      _0x380e98 = await $.task("get", "https://theater.zhangyue.com/welfare/gold/user/gold_account?account_type=0&gold_type=2&zysid=" + this.zysid + "&usr=" + this.usr + "&rgt=" + this.rgt + "&p1=" + this.p1 + "&pc=" + this.pc + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p35=" + this.p35 + "&timestamp=" + _0x728bd9, _0x56de38);
    _0x380e98.code == 0 ? (console.log("\u3010" + this.f + "\u3011\u767B\u9646\u6210\u529F\uFF0C\u4ECA\u65E5\u91D1\u5E01" + _0x380e98.body.total_gold_num + ",\u4F59\u989D\uFF1A" + _0x380e98.body.actual_withdraw_num + "\u5143"), this.message += "\u3010" + this.f + "\u3011\u767B\u9646\u6210\u529F\uFF0C\u4ECA\u65E5\u91D1\u5E01" + _0x380e98.body.total_gold_num + ",\u4F59\u989D\uFF1A" + _0x380e98.body.actual_withdraw_num + "\u5143", this.logs = true, _0x380e98.body.actual_withdraw_num >= 1 && (await this.tx())) : this.logs = false;
  }
  async ["tasklist"]() {
    let _0xd6cdb8 = $.time(13),
      _0x3108e0 = "&act_ids=act_fab57a8c,act_d713ed16,act_468c5a57&p1=" + this.p1 + "&p16=" + this.p16 + "&p2=" + this.p2 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p3=" + this.p3 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&pc=" + this.pc + "&rgt=" + this.rgt + "&timestamp=" + _0xd6cdb8 + "&usr=" + this.usr + "&zysid=" + this.zysid + "&/task_api/task/list/by_act_ids&" + _0xd6cdb8,
      _0x3ff0e2 = await this.getsign(_0x3108e0),
      _0x5d799a = {
        "x-appid": "zy9351ae",
        "x-sig-sign": _0x3ff0e2,
        "x-sig-alg": "RSA-SHA256",
        "x-sig-timestamp": _0xd6cdb8
      },
      _0x2e2758 = await $.task("get", "https://theater.zhangyue.com/task_api/task/list/by_act_ids?act_ids=act_fab57a8c%2Cact_d713ed16%2Cact_468c5a57&zysid=" + this.zysid + "&usr=" + this.usr + "&rgt=" + this.rgt + "&p1=" + this.p1 + "&pc=" + this.pc + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&timestamp=" + _0xd6cdb8, _0x5d799a);
    if (_0x2e2758.code == 0) {
      for (let _0x191b8c of _0x2e2758.body.act_d713ed16.task_list) {
        let _0x504932 = "act_d713ed16";
        if (_0x191b8c.title = "\u7B7E\u52307\u5929\u6700\u9AD8\u8D5A30\u5143") {
          for (let _0x231abe of _0x191b8c.sub_task_list) {
            _0x231abe.status == "un_finished" && (await this.dotask(_0x504932, _0x191b8c.id, _0x231abe.id, _0x191b8c.title));
          }
        }
      }
      for (let _0x47d346 of _0x2e2758.body.act_fab57a8c.task_list) {
        let _0x25c34a = "act_fab57a8c";
        if (_0x47d346.title != "\u770B\u5C0F\u8BF4\u8D5A\u94B1") {
          for (let _0x43725f of _0x47d346.sub_task_list) {
            if (_0x43725f.status == "un_finished" || _0x43725f.reward_status == "un_reward") {
              await this.dotask(_0x25c34a, _0x47d346.id, _0x43725f.id, _0x47d346.title);
            }
          }
        }
      }
    }
  }
  async ["dotask"](_0x1bceba, _0x46e7d5, _0x2db1e0, _0x53d187) {
    let _0x42cc2e = $.time(13),
      _0x1491f6 = "act_id=" + _0x1bceba + "&task_id=" + _0x46e7d5 + "&sub_task_id=" + _0x2db1e0 + "&zysid=" + this.zysid + "&usr=" + this.usr + "&rgt=" + this.rgt + "&p1=" + this.p1 + "&pc=" + this.pc + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p35=" + this.p35 + "&timestamp=" + _0x42cc2e + "&&/task_api/task/draw_gift&" + _0x42cc2e,
      _0x67d03 = await this.getsign(_0x1491f6),
      _0x3c2a68 = {
        "x-appid": "zy9351ae",
        "x-sig-sign": _0x67d03,
        "x-sig-alg": "RSA-SHA256",
        "x-sig-timestamp": _0x42cc2e
      },
      _0x10ac36 = "act_id=" + _0x1bceba + "&task_id=" + _0x46e7d5 + "&sub_task_id=" + _0x2db1e0 + "&zysid=" + this.zysid + "&usr=" + this.usr + "&rgt=" + this.rgt + "&p1=" + this.p1 + "&pc=" + this.pc + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p35=" + this.p35 + "&timestamp=" + _0x42cc2e,
      _0x41e620 = await $.task("post", "https://theater.zhangyue.com/task_api/task/draw_gift", _0x3c2a68, _0x10ac36);
    if (_0x41e620.code == 0) {
      console.log("\u3010" + this.f + "\u3011\u83B7\u53D6" + _0x53d187 + "\u6210\u529F\uFF0C\u83B7\u5F97" + _0x41e620.body.gift_info[0].amount + "\u91D1\u5E01");
      await $.wait(6000, 10000);
    } else {
      console.log("\u3010" + this.f + "\u3011\u83B7\u53D6" + _0x53d187 + "\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A" + _0x41e620.msg);
    }
  }
  async ["shuavideopre"]() {
    let _0x1b6b11 = "act_71b51105",
      _0x5f6af8 = "task_91160d29",
      _0x32a719 = "act_5f85ccff",
      _0x1159b0 = "task_f4f38507";
    await this.shuavideo(_0x1b6b11, _0x5f6af8, SID);
    await this.shuavideo(_0x32a719, _0x1159b0, SID2);
  }
  async ["shuavideo"](_0x565e91, _0x1b5b9f, _0x4ea09b) {
    for (let _0x1a71a7 of _0x4ea09b) {
      let _0x5467b9 = $.RT(8500, 22000),
        _0x13283c = $.time(13),
        _0x569c03 = "zysid=" + this.zysid + "&p1=" + this.p1 + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&act_id=" + _0x565e91 + "&p9=" + this.p9 + "&task_id=" + _0x1b5b9f + "&zysid=" + this.zysid + "&p31=" + this.p31 + "&sid=" + _0x1a71a7 + "&p34=force_fsg_nav_bar&p33=" + this.p33 + "&p35=" + this.p35 + "&p16=" + this.p16 + "&usr=" + this.usr + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&pc=" + this.pc + "&p24=0&ecpm=" + _0x5467b9 + ".0&p29=" + this.p29 + "&p28=" + this.p28 + "&sub_task_id=&&/task_api/task/draw_gift&" + _0x13283c,
        _0x82aa9d = await this.getsign(_0x569c03),
        _0xd3dc7d = {
          "x-appid": "zy9351ae",
          "x-sig-sign": _0x82aa9d,
          "x-sig-alg": "RSA-SHA256",
          "x-sig-timestamp": _0x13283c
        },
        _0x16b8b3 = "zysid=" + this.zysid + "&p1=" + this.p1 + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&act_id=" + _0x565e91 + "&p9=" + this.p9 + "&task_id=" + _0x1b5b9f + "&zysid=" + this.zysid + "&p31=" + this.p31 + "&sid=" + _0x1a71a7 + "&p34=force_fsg_nav_bar&p33=" + this.p33 + "&p35=" + this.p35 + "&p16=" + this.p16 + "&usr=" + this.usr + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&pc=" + this.pc + "&p24=0&ecpm=" + _0x5467b9 + ".0&p29=" + this.p29 + "&p28=" + this.p28 + "&sub_task_id=",
        _0x545118 = await $.task("post", "https://theater.zhangyue.com/task_api/task/draw_gift", _0xd3dc7d, _0x16b8b3);
      if (_0x545118.code == 0) {
        for (let _0xb5a924 of _0x545118.body.gift_info) {
          console.log("\u3010" + this.f + "\u3011\u5237\u89C6\u9891\u6210\u529F\uFF0C\u83B7\u5F97" + _0xb5a924.amount + "\u91D1\u5E01");
          await $.wait(40000, 65000);
        }
      } else {
        console.log("\u3010" + this.f + "\u3011\u5237\u89C6\u9891\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A" + _0x545118.msg);
      }
    }
  }
  async tx() {
    let _0xdf7b60 = $.time(13),
      _0x115805 = "type=" + this.txtype + "&amount=1&sub_id=293&account_type=0&gold_type=2&zysid=" + this.zysid + "&usr=" + this.usr + "&rgt=" + this.rgt + "&p1=" + this.p1 + "&pc=" + this.pc + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p35=" + this.p35 + "&timestamp=" + _0xdf7b60 + "&&/welfare/gold/withdraw/exec&" + _0xdf7b60,
      _0x1df5ec = await this.getsign(_0x115805),
      _0x3851b0 = {
        "x-appid": "zy9351ae",
        "x-sig-sign": _0x1df5ec,
        "x-sig-alg": "RSA-SHA256",
        "x-sig-timestamp": _0xdf7b60
      },
      _0x3b1443 = "type=" + this.txtype + "&amount=1&sub_id=293&account_type=0&gold_type=2&zysid=" + this.zysid + "&usr=" + this.usr + "&rgt=" + this.rgt + "&p1=" + this.p1 + "&pc=" + this.pc + "&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=" + this.p30 + "&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&p35=" + this.p35 + "&timestamp=" + _0xdf7b60,
      _0x11b0b7 = await $.task("post", "https://theater.zhangyue.com/welfare/gold/withdraw/exec", _0x3851b0, _0x3b1443);
    _0x11b0b7.code == 0 ? (console.log("\u3010" + this.f + "\u3011\u63D0\u73B01\u5143\u6210\u529F"), this.message += "\u3010" + this.f + "\u3011\u63D0\u73B01\u5143\u6210\u529F") : console.log("\u3010" + this.f + "\u3011\u63D0\u73B0\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A" + _0x11b0b7.msg);
  }
}
$ = 蛋炒饭_0x2bef4e();
!(async () => {
  console.log("\u6B63\u5728\u8FD0\u884C\u811A\u672C\uFF1A\u3010" + NAME + "\u3011V1.06");
  console.log("\uD83D\uDCE2 \u8BF7\u8BA4\u771F\u9605\u8BFB\u4EE5\u4E0B\u58F0\u660E\n \u3010\u514D\u8D23\u58F0\u660E\u3011   \n\uD83D\uDCCC \u811A\u672C\u6587\u4EF6\u4EC5\u7528\u4E8E\u6D4B\u8BD5\u548C\u5B66\u4E60\u7814\u7A76   \n\uD83D\uDCCC \u811A\u672C\u6587\u4EF6\u4EFB\u4F55\u4EBA\u4E0D\u5F97\u7528\u4E8E\u5546\u4E1A\u4EE5\u53CA\u975E\u6CD5\u7528\u9014   \n\uD83D\uDCCC \u7981\u6B62\u4EFB\u4F55\u516C\u4F17\u53F7\u3001\u81EA\u5A92\u4F53\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u8F6C\u53D1   \n\uD83D\uDCCC \u811A\u672C\u6587\u4EF6\u8BF7\u5728\u4E0B\u8F7D\u8BD5\u7528\u540E24\u5C0F\u65F6\u5185\u81EA\u884C\u5220\u9664   \n\uD83D\uDCCC \u56E0\u4F7F\u7528\u811A\u672C\u9020\u6210\u8F6F\u4EF6\u5E73\u53F0\u7684\u4E00\u5207\u635F\u5931\u7686\u7531\u4F7F\u7528\u8005\u627F\u62C5   \n\uD83D\uDCCC \u811A\u672C\u6587\u4EF6\u5982\u6709\u4E0D\u614E\u88AB\u7834\u89E3\u6216\u4FEE\u6539\u7531\u7834\u89E3\u6216\u4FEE\u6539\u8005\u627F\u62C5   \n\uD83D\uDCCC \u5982\u4E0D\u63A5\u53D7\u6B64\u6761\u6B3E\u8BF7\u7ACB\u5373\u5220\u9664\u811A\u672C\u6587\u4EF6");
  await $.ExamineCookie();
  if ($.cookie_list.length < 11) {
    let _0x28c8d3 = $.cookie_list.filter(_0x4d6539 => _0x4d6539.logs == true);
    if (_0x28c8d3.length == 0) {
      return;
    } else {
      await $.Multithreading("tasklist");
      await $.Multithreading("shuavideopre");
    }
  } else {
    console.log("\u8D26\u53F7\u6570\u91CF\u8D85\u8FC7\u9650\u5236\uFF0C\u8BF7\u51CF\u5C11\u8D26\u53F7\u6570\u91CF\u540E\u91CD\u8BD5\uFF01");
  }
  let _0x406a13 = [];
  for (let _0x2dbaae of $.cookie_list) {
    if (_0x2dbaae.message) {
      _0x406a13.push(_0x2dbaae.message);
    }
  }
  if (_0x406a13.length > 0) {
    await $.SendMsg(_0x406a13.join("\n"));
  }
})().catch(_0x3a1cbc => {
  console.log(_0x3a1cbc);
}).finally(() => {});
function 蛋炒饭_0x2bef4e() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x45deb9, _0x1ac3ce, _0x1adc96) {
      let _0x23e0d7 = [];
      !_0x1adc96 && (_0x1adc96 = 1);
      while (_0x1adc96--) {
        for (let _0x1e8c8f of $.cookie_list) {
          _0x23e0d7.push(_0x1e8c8f[_0x45deb9](_0x1ac3ce));
        }
      }
      await Promise.allSettled(_0x23e0d7);
    }
    ["ExamineCookie"]() {
      let _0x1bb25d = process.env[VALY] || CK,
        _0x3fa364 = 0;
      if (_0x1bb25d) {
        for (let _0x509107 of _0x1bb25d.split("\n").filter(_0x5ece91 => !!_0x5ece91)) {
          $.cookie_list.push(new 蛋炒饭_0x25588c(_0x509107));
        }
        _0x3fa364 = $.cookie_list.length;
      } else {
        console.log("\n\u3010" + NAME + "\u3011\uFF1A\u672A\u586B\u5199\u53D8\u91CF: " + VALY);
      }
      console.log("\u5171\u627E\u5230" + _0x3fa364 + "\u4E2A\u8D26\u53F7");
      return $.cookie_list;
    }
    ["task"](_0x4e5341, _0x45dfcf, _0x380900, _0x37678a, _0x54685c) {
      _0x4e5341 == "delete" ? _0x4e5341 = _0x4e5341.toUpperCase() : _0x4e5341 = _0x4e5341;
      if (_0x4e5341 == "post") {
        delete _0x380900["content-type"];
        delete _0x380900["Content-type"];
        delete _0x380900["content-Type"];
        if ($.safeGet(_0x37678a)) {
          _0x380900["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x380900["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x37678a && (_0x380900["Content-Length"] = $.lengthInUtf8Bytes(_0x37678a));
      }
      _0x4e5341 == "get" && (delete _0x380900["content-type"], delete _0x380900["Content-type"], delete _0x380900["content-Type"], delete _0x380900["Content-Length"]);
      _0x380900.Host = _0x45dfcf.replace("//", "/").split("/")[1];
      return new Promise(async _0x1b80c8 => {
        if (_0x4e5341.indexOf("T") < 0) {
          var _0x3b1d6c = {
            url: _0x45dfcf,
            headers: _0x380900,
            body: _0x37678a,
            proxy: "http://" + _0x54685c
          };
        } else {
          var _0x3b1d6c = {
            url: _0x45dfcf,
            headers: _0x380900,
            form: JSON.parse(_0x37678a),
            proxy: "http://" + _0x54685c
          };
        }
        !_0x54685c && delete _0x3b1d6c.proxy;
        this.request[_0x4e5341.toLowerCase()](_0x3b1d6c, (_0x215389, _0x28f591, _0x5b0b56) => {
          try {
            if (_0x5b0b56) {
              if (LOGS == 1) {
                console.log("================ \u8BF7\u6C42 ================");
                console.log(_0x3b1d6c);
                console.log("================ \u8FD4\u56DE ================");
                if ($.safeGet(_0x5b0b56)) {
                  console.log(JSON.parse(_0x5b0b56));
                } else {
                  console.log(_0x5b0b56);
                }
              }
            }
          } catch (_0x42a574) {
            console.log(_0x42a574, _0x45dfcf + "\n" + _0x380900);
          } finally {
            let _0x499a48 = "";
            if (!_0x215389) {
              if ($.safeGet(_0x5b0b56)) {
                _0x499a48 = JSON.parse(_0x5b0b56);
              } else {
                _0x5b0b56.indexOf("/") != -1 && _0x5b0b56.indexOf("+") != -1 ? _0x499a48 = _0x5b0b56 : _0x499a48 = _0x5b0b56;
              }
            } else {
              _0x499a48 = _0x45dfcf + "   API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u91CD\u8BD5\n" + _0x215389;
            }
            return _0x1b80c8(_0x499a48);
          }
        });
      });
    }
    ["getRandomIP"]() {
      const _0x20f380 = () => Math.floor(Math.random() * 256);
      return _0x20f380() + "." + _0x20f380() + "." + _0x20f380() + "." + _0x20f380();
    }
    async ["SendMsg"](_0x2ec466) {
      if (!_0x2ec466) {
        return;
      }
      if (Notify == 1) {
        var _0x38a7ca = require("./sendNotify");
        await _0x38a7ca.sendNotify(NAME, _0x2ec466);
      }
    }
    ["lengthInUtf8Bytes"](_0x2ca56b) {
      let _0x16f7ab = encodeURIComponent(_0x2ca56b).match(/%[89ABab]/g);
      return _0x2ca56b.length + (_0x16f7ab ? _0x16f7ab.length : 0);
    }
    ["randomArr"](_0x958d22) {
      return _0x958d22[parseInt(Math.random() * _0x958d22.length, 10)];
    }
    ["wait"](_0x47e151) {
      return new Promise(_0x5f10e5 => setTimeout(_0x5f10e5, _0x47e151));
    }
    ["time"](_0x7d52c2) {
      return _0x7d52c2 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x3f3feb) {
      let _0x34082d = new Date();
      if (_0x3f3feb == undefined) {
        let _0x1e6b95 = new Date(),
          _0xb8cfec = _0x1e6b95.getFullYear() + "-",
          _0x4aac2c = (_0x1e6b95.getMonth() + 1 < 10 ? "0" + (_0x1e6b95.getMonth() + 1) : _0x1e6b95.getMonth() + 1) + "-",
          _0x40d18e = _0x1e6b95.getDate() + " ",
          _0x2608e6 = _0x1e6b95.getHours() + ":",
          _0x55cd7a = _0x1e6b95.getMinutes() + ":",
          _0x4e343e = _0x1e6b95.getSeconds() + 1 < 10 ? "0" + _0x1e6b95.getSeconds() : _0x1e6b95.getSeconds();
        return _0xb8cfec + _0x4aac2c + _0x40d18e + _0x2608e6 + _0x55cd7a + _0x4e343e;
      } else {
        if (_0x3f3feb == 0) {
          return _0x34082d.getFullYear();
        } else {
          if (_0x3f3feb == 1) {
            return _0x34082d.getMonth() + 1 < 10 ? "0" + (_0x34082d.getMonth() + 1) : _0x34082d.getMonth() + 1;
          } else {
            if (_0x3f3feb == 2) {
              return _0x34082d.getDate();
            } else {
              if (_0x3f3feb == 3) {
                return _0x34082d.getHours();
              } else {
                if (_0x3f3feb == 4) {
                  return _0x34082d.getMinutes();
                } else {
                  if (_0x3f3feb == 5) {
                    return _0x34082d.getSeconds() + 1 < 10 ? "0" + _0x34082d.getSeconds() : _0x34082d.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x5467c9) {
      try {
        if (typeof JSON.parse(_0x5467c9) == "object") {
          return true;
        }
      } catch (_0x5b591c) {
        return false;
      }
    }
    ["SJS"](_0x20c354, _0x6079d4) {
      if (_0x6079d4 == 0) {
        let _0x349b7c = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x2025bc = _0x349b7c.length,
          _0x352bc0 = "";
        for (let _0x152ed4 = 0; _0x152ed4 < _0x20c354; _0x152ed4++) {
          _0x352bc0 += _0x349b7c.charAt(Math.floor(Math.random() * _0x2025bc));
        }
        return _0x352bc0;
      } else {
        if (_0x6079d4 == 1) {
          let _0x240781 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x25b0fa = _0x240781.length,
            _0x470fff = "";
          for (let _0x2a7231 = 0; _0x2a7231 < _0x20c354; _0x2a7231++) {
            _0x470fff += _0x240781.charAt(Math.floor(Math.random() * _0x25b0fa));
          }
          return _0x470fff;
        } else {
          let _0x22c36f = "0123456789",
            _0x5b1857 = _0x22c36f.length,
            _0x3519f3 = "";
          for (let _0x10337c = 0; _0x10337c < _0x20c354; _0x10337c++) {
            _0x3519f3 += _0x22c36f.charAt(Math.floor(Math.random() * _0x5b1857));
          }
          return _0x3519f3;
        }
      }
    }
    ["udid"](_0x3c8924) {
      function _0xf0d536() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x736578 = _0xf0d536() + _0xf0d536() + "-" + _0xf0d536() + "-" + _0xf0d536() + "-" + _0xf0d536() + "-" + _0xf0d536() + _0xf0d536() + _0xf0d536();
      if (_0x3c8924 == 0) {
        return _0x736578.toUpperCase();
      } else {
        return _0x736578.toLowerCase();
      }
    }
    ["encodeUnicode"](_0x240f50) {
      var _0x15ebd5 = [];
      for (var _0x50e76d = 0; _0x50e76d < _0x240f50.length; _0x50e76d++) {
        _0x15ebd5[_0x50e76d] = ("00" + _0x240f50.charCodeAt(_0x50e76d).toString(16)).slice(-4);
      }
      return "\\u" + _0x15ebd5.join("\\u");
    }
    ["base64ToHex"](_0x3ecb4c) {
      const _0x2bbe09 = atob(_0x3ecb4c),
        _0x2e279d = new Uint8Array(_0x2bbe09.length);
      for (let _0x5113ae = 0; _0x5113ae < _0x2bbe09.length; _0x5113ae++) {
        _0x2e279d[_0x5113ae] = _0x2bbe09.charCodeAt(_0x5113ae);
      }
      let _0x1da86c = "";
      for (let _0x51d027 = 0; _0x51d027 < _0x2e279d.length; _0x51d027++) {
        const _0x15e6c6 = _0x2e279d[_0x51d027].toString(16).padStart(2, "0");
        _0x1da86c += _0x15e6c6;
      }
      return _0x1da86c;
    }
    ["decodeUnicode"](_0x10840e) {
      _0x10840e = _0x10840e.replace(/\\u/g, "%u");
      return unescape(unescape(_0x10840e));
    }
    RT(_0x5b0200, _0x54917c) {
      return Math.round(Math.random() * (_0x54917c - _0x5b0200) + _0x5b0200);
    }
    ["arrNull"](_0x2ed392) {
      var _0x41b15f = _0x2ed392.filter(_0x496ff8 => {
        return _0x496ff8 && _0x496ff8.trim();
      });
      return _0x41b15f;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 480 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x949b1e = $.nowtime();
      JSON.stringify(_0x949b1e).indexOf(" ") >= 0 && (_0x949b1e = _0x949b1e.replace(" ", "T"));
      return new Date(_0x949b1e).getTime() - 480 * 60 * 1000;
    }
    ["rtjson"](_0x119608, _0x229a09, _0x4803f1, _0x1a46fd) {
      if (_0x1a46fd == 0) {
        return JSON.stringify(_0x119608.split(_0x229a09).reduce((_0x50adc1, _0x11aeff) => {
          let _0x4c894b = _0x11aeff.split(_0x4803f1);
          _0x50adc1[_0x4c894b[0].trim()] = _0x4c894b[1].trim();
          return _0x50adc1;
        }, {}));
      } else {
        return _0x119608.split(_0x229a09).reduce((_0x5cf8d0, _0xd84a94) => {
          let _0x2ea205 = _0xd84a94.split(_0x4803f1);
          _0x5cf8d0[_0x2ea205[0].trim()] = _0x2ea205[1].trim();
          return _0x5cf8d0;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x40bbd5, _0x4eed7d) {
      if (_0x40bbd5 == 0) {
        return this.CryptoJS.MD5(_0x4eed7d).toString().toLowerCase();
      } else {
        if (_0x40bbd5 == 1) {
          return this.CryptoJS.MD5(_0x4eed7d).toString().toUpperCase();
        } else {
          if (_0x40bbd5 == 2) {
            return this.CryptoJS.MD5(_0x4eed7d).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x40bbd5 == 3) {
              return this.CryptoJS.MD5(_0x4eed7d).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x23d4fa, _0x195ca7, _0x523c31) {
      if (_0x23d4fa == 0) {
        return this.CryptoJS[_0x195ca7](_0x523c31).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x195ca7](_0x523c31).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0xd364b2, _0x3c232b, _0xb9dd1d, _0x33b119) {
      if (_0xd364b2 == 0) {
        return this.CryptoJS[_0x3c232b](_0xb9dd1d, _0x33b119).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x3c232b](_0xb9dd1d, _0x33b119).toString();
      }
    }
    ["Base64"](_0x32084d, _0x4deb34) {
      if (_0x32084d == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4deb34));
      } else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4deb34));
      }
    }
    ["DecryptCrypto"](_0x3c51f4, _0xf72b53, _0x110ee9, _0x333c7a, _0x1e605b, _0x56ae04, _0x583a78) {
      if (_0x3c51f4 == 0) {
        const _0xad6aa6 = this.CryptoJS[_0xf72b53].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1e605b), this.CryptoJS.enc.Utf8.parse(_0x56ae04), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x583a78),
          mode: this.CryptoJS.mode[_0x110ee9],
          padding: this.CryptoJS.pad[_0x333c7a]
        });
        return _0xad6aa6.toString();
      } else {
        const _0x1c5939 = this.CryptoJS[_0xf72b53].decrypt(_0x1e605b, this.CryptoJS.enc.Utf8.parse(_0x56ae04), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x583a78),
          mode: this.CryptoJS.mode[_0x110ee9],
          padding: this.CryptoJS.pad[_0x333c7a]
        });
        return _0x1c5939.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x317536, _0x5b4aed) {
      const _0x56b999 = require("node-rsa");
      let _0x14939d = new _0x56b999("-----BEGIN PUBLIC KEY-----\n" + _0x5b4aed + "\n-----END PUBLIC KEY-----");
      _0x14939d.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x14939d.encrypt(_0x317536, "base64", "utf8");
    }
    ["getSHA256withRSA"](_0x2b52ab) {
      const _0x2c4e92 = 蛋炒饭_0x3e11b0.KEYUTIL.getKey(蛋炒饭_0x3111aa),
        _0x235655 = new 蛋炒饭_0x3e11b0.KJUR.crypto.Signature({
          alg: "SHA256withRSA"
        });
      _0x235655.init(_0x2c4e92);
      _0x235655.updateString(_0x2b52ab);
      const _0x57ae1c = _0x235655.sign(),
        _0x41d9ee = 蛋炒饭_0x3e11b0.hextob64u(_0x57ae1c);
      return _0x41d9ee;
    }
    ["hexToBase64"](_0x4b7fa9) {
      const _0x50783f = [];
      for (let _0x249b1c = 0; _0x249b1c < _0x4b7fa9.length; _0x249b1c += 2) {
        _0x50783f.push(parseInt(_0x4b7fa9.substr(_0x249b1c, 2), 16));
      }
      const _0x5cf7e8 = btoa(String.fromCharCode(..._0x50783f));
      return _0x5cf7e8;
    }
    ["Sha1withRsa"](_0x2f9b3d) {
      const {
          KEYUTIL: _0x296547,
          KJUR: _0x2c334c,
          b64utoutf8: _0x29df51,
          utf8tob64: _0x2b0705
        } = require("jsrsasign"),
        _0x5a11e9 = _0x296547.getKey(Key),
        _0x3ecd8e = new _0x2c334c.crypto.Signature({
          alg: "SHA1withRSA"
        });
      _0x3ecd8e.init(_0x5a11e9);
      _0x3ecd8e.updateString(_0x2f9b3d);
      const _0x411153 = _0x3ecd8e.sign();
      let _0x8a854 = $.hexToBase64(_0x411153);
      return _0x8a854;
    }
  }();
}