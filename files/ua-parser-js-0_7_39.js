__d(
  "ua-parser-js-0.7.39",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (t, n) {
        var r = "0.7.39",
          o = "",
          a = "?",
          i = "function",
          s = "undefined",
          u = "object",
          c = "string",
          d = "major",
          m = "model",
          p = "name",
          _ = "type",
          f = "vendor",
          g = "version",
          h = "architecture",
          y = "console",
          C = "mobile",
          b = "tablet",
          v = "smarttv",
          S = "wearable",
          R = "embedded",
          L = 500,
          E = "Amazon",
          k = "Apple",
          I = "ASUS",
          T = "BlackBerry",
          D = "Browser",
          x = "Chrome",
          $ = "Edge",
          P = "Firefox",
          N = "Google",
          M = "Huawei",
          w = "LG",
          A = "Microsoft",
          F = "Motorola",
          O = "Opera",
          B = "Samsung",
          W = "Sharp",
          q = "Sony",
          U = "Xiaomi",
          V = "Zebra",
          H = "Facebook",
          G = "Chromium OS",
          z = "Mac OS",
          j = " Browser",
          K = function (e, t) {
            var n = {};
            for (var r in e)
              t[r] && t[r].length % 2 === 0
                ? (n[r] = t[r].concat(e[r]))
                : (n[r] = e[r]);
            return n;
          },
          Q = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          X = function (e, t) {
            return typeof e === c ? Y(t).indexOf(Y(e)) !== -1 : !1;
          },
          Y = function (e) {
            return e.toLowerCase();
          },
          J = function (e) {
            return typeof e === c ? e.replace(/[^\d\.]/g, o).split(".")[0] : n;
          },
          Z = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, o)),
                typeof t === s ? e : e.substring(0, L)
              );
          },
          ee = function (e, t) {
            for (var r = 0, o, a, l, s, c, d; r < t.length && !c; ) {
              var m = t[r],
                p = t[r + 1];
              for (o = a = 0; o < m.length && !c && m[o]; )
                if (((c = m[o++].exec(e)), c))
                  for (l = 0; l < p.length; l++)
                    ((d = c[++a]),
                      (s = p[l]),
                      typeof s === u && s.length > 0
                        ? s.length === 2
                          ? typeof s[1] == i
                            ? (this[s[0]] = s[1].call(this, d))
                            : (this[s[0]] = s[1])
                          : s.length === 3
                            ? typeof s[1] === i && !(s[1].exec && s[1].test)
                              ? (this[s[0]] = d ? s[1].call(this, d, s[2]) : n)
                              : (this[s[0]] = d ? d.replace(s[1], s[2]) : n)
                            : s.length === 4 &&
                              (this[s[0]] = d
                                ? s[3].call(this, d.replace(s[1], s[2]))
                                : n)
                        : (this[s] = d || n));
              r += 2;
            }
          },
          te = function (e, t) {
            for (var r in t)
              if (typeof t[r] === u && t[r].length > 0) {
                for (var o = 0; o < t[r].length; o++)
                  if (X(t[r][o], e)) return r === a ? n : r;
              } else if (X(t[r], e)) return r === a ? n : r;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          ne = {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/",
          },
          re = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          oe = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [p, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [p, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [p, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [p, O + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [g, [p, O + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [g, [p, O]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [g, [p, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [p, g],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [g, [p, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [g, [p, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [p, "UC" + D]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [g, [p, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [g, [p, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [p, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [g, [p, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [g, [p, "Smart Lenovo " + D]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[p, /(.+)/, "$1 Secure " + D], g],
              [/\bfocus\/([\w\.]+)/i],
              [g, [p, P + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [g, [p, O + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [p, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [g, [p, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [g, [p, O + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [p, "MIUI " + D]],
              [/fxios\/([-\w\.]+)/i],
              [g, [p, P]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[p, "360" + j]],
              [/\b(qq)\/([\w\.]+)/i],
              [[p, /(.+)/, "$1Browser"], g],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[p, /(.+)/, "$1" + j], g],
              [/samsungbrowser\/([\w\.]+)/i],
              [g, [p, B + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[p, /_/g, " "], g],
              [/metasr[\/ ]?([\d\.]+)/i],
              [g, [p, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[p, "Sogou Mobile"], g],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [p, g],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [p],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[p, H], g],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [p, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [p, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [g, [p, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [p, x + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[p, x + " WebView"], g],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [p, "Android " + D]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [p, g],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [g, [p, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [g, p],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [p, [g, te, ne]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [p, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[p, "Netscape"], g],
              [/(wolvic)\/([\w\.]+)/i],
              [p, g],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [p, P + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [p, [g, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [p, [g, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[h, "amd64"]],
              [/(ia32(?=;))/i],
              [[h, Y]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[h, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[h, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[h, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[h, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[h, /ower/, o, Y]],
              [/(sun4\w)[;\)]/i],
              [[h, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[h, Y]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [m, [f, B], [_, b]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [m, [f, B], [_, C]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [m, [f, k], [_, C]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [m, [f, k], [_, b]],
              [/(macintosh);/i],
              [m, [f, k]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [m, [f, W], [_, C]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [m, [f, M], [_, b]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [m, [f, M], [_, C]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [m, /_/g, " "],
                [f, U],
                [_, C],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [m, /_/g, " "],
                [f, U],
                [_, b],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [m, [f, "OPPO"], [_, C]],
              [/\b(opd2\d{3}a?) bui/i],
              [m, [f, "OPPO"], [_, b]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [m, [f, "Vivo"], [_, C]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [m, [f, "Realme"], [_, C]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [m, [f, F], [_, C]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [m, [f, F], [_, b]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [m, [f, w], [_, b]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [m, [f, w], [_, C]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [m, [f, "Lenovo"], [_, b]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [m, /_/g, " "],
                [f, "Nokia"],
                [_, C],
              ],
              [/(pixel c)\b/i],
              [m, [f, N], [_, b]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [m, [f, N], [_, C]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [m, [f, q], [_, C]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [m, "Xperia Tablet"],
                [f, q],
                [_, b],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [m, [f, "OnePlus"], [_, C]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [m, [f, E], [_, b]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [m, /(.+)/g, "Fire Phone $1"],
                [f, E],
                [_, C],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [m, f, [_, b]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [m, [f, T], [_, C]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [m, [f, I], [_, b]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [m, [f, I], [_, C]],
              [/(nexus 9)/i],
              [m, [f, "HTC"], [_, b]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [f, [m, /_/g, " "], [_, C]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [m, [f, "TCL"], [_, b]],
              [/(itel) ((\w+))/i],
              [
                [f, Y],
                m,
                [_, te, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [m, [f, "Acer"], [_, b]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [m, [f, "Meizu"], [_, C]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [m, [f, "Ulefone"], [_, C]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [m, [f, "Nothing"], [_, C]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [f, m, [_, C]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [f, m, [_, b]],
              [/(surface duo)/i],
              [m, [f, A], [_, b]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [m, [f, "Fairphone"], [_, C]],
              [/(u304aa)/i],
              [m, [f, "AT&T"], [_, C]],
              [/\bsie-(\w*)/i],
              [m, [f, "Siemens"], [_, C]],
              [/\b(rct\w+) b/i],
              [m, [f, "RCA"], [_, b]],
              [/\b(venue[\d ]{2,7}) b/i],
              [m, [f, "Dell"], [_, b]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [m, [f, "Verizon"], [_, b]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [m, [f, "Barnes & Noble"], [_, b]],
              [/\b(tm\d{3}\w+) b/i],
              [m, [f, "NuVision"], [_, b]],
              [/\b(k88) b/i],
              [m, [f, "ZTE"], [_, b]],
              [/\b(nx\d{3}j) b/i],
              [m, [f, "ZTE"], [_, C]],
              [/\b(gen\d{3}) b.+49h/i],
              [m, [f, "Swiss"], [_, C]],
              [/\b(zur\d{3}) b/i],
              [m, [f, "Swiss"], [_, b]],
              [/\b((zeki)?tb.*\b) b/i],
              [m, [f, "Zeki"], [_, b]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[f, "Dragon Touch"], m, [_, b]],
              [/\b(ns-?\w{0,9}) b/i],
              [m, [f, "Insignia"], [_, b]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [m, [f, "NextBook"], [_, b]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[f, "Voice"], m, [_, C]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[f, "LvTel"], m, [_, C]],
              [/\b(ph-1) /i],
              [m, [f, "Essential"], [_, C]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [m, [f, "Envizen"], [_, b]],
              [/\b(trio[-\w\. ]+) b/i],
              [m, [f, "MachSpeed"], [_, b]],
              [/\btu_(1491) b/i],
              [m, [f, "Rotor"], [_, b]],
              [/(shield[\w ]+) b/i],
              [m, [f, "Nvidia"], [_, b]],
              [/(sprint) (\w+)/i],
              [f, m, [_, C]],
              [/(kin\.[onetw]{3})/i],
              [
                [m, /\./g, " "],
                [f, A],
                [_, C],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [m, [f, V], [_, b]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [m, [f, V], [_, C]],
              [/smart-tv.+(samsung)/i],
              [f, [_, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [m, /^/, "SmartTV"],
                [f, B],
                [_, v],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, w],
                [_, v],
              ],
              [/(apple) ?tv/i],
              [f, [m, k + " TV"], [_, v]],
              [/crkey/i],
              [
                [m, x + "cast"],
                [f, N],
                [_, v],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [m, [f, E], [_, v]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [m, [f, W], [_, v]],
              [/(bravia[\w ]+)( bui|\))/i],
              [m, [f, q], [_, v]],
              [/(mitv-\w{5}) bui/i],
              [m, [f, U], [_, v]],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, m, [_, v]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [f, Z],
                [m, Z],
                [_, v],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[_, v]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, m, [_, y]],
              [/droid.+; (shield) bui/i],
              [m, [f, "Nvidia"], [_, y]],
              [/(playstation [345portablevi]+)/i],
              [m, [f, q], [_, y]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [m, [f, A], [_, y]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [m, [f, B], [_, S]],
              [/((pebble))app/i],
              [f, m, [_, S]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [m, [f, k], [_, S]],
              [/droid.+; (glass) \d/i],
              [m, [f, N], [_, S]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [m, [f, V], [_, S]],
              [/(quest( \d| pro)?)/i],
              [m, [f, H], [_, S]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [_, R]],
              [/(aeobc)\b/i],
              [m, [f, E], [_, R]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [m, [_, C]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [m, [_, b]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[_, b]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[_, C]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [m, [f, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [p, $ + "HTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [p, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [p, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, p],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [p, g],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [p, [g, te, re]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [g, te, re],
                [p, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [g, /_/g, "."],
                [p, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [p, z],
                [g, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [g, p],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [p, g],
              [/\(bb(10);/i],
              [g, [p, T]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [p, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [g, [p, P + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [p, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [g, [p, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [g, [p, x + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[p, G], g],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [p, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [[p, "Solaris"], g],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [p, g],
            ],
          },
          ae = function (e, r) {
            if ((typeof e === u && ((r = e), (e = n)), !(this instanceof ae)))
              return new ae(e, r).getResult();
            var a = typeof t !== s && t.navigator ? t.navigator : n,
              l = e || (a && a.userAgent ? a.userAgent : o),
              y = a && a.userAgentData ? a.userAgentData : n,
              v = r ? K(oe, r) : oe,
              S = a && a.userAgent == l;
            return (
              (this.getBrowser = function () {
                var e = {};
                return (
                  (e[p] = n),
                  (e[g] = n),
                  ee.call(e, l, v.browser),
                  (e[d] = J(e[g])),
                  S &&
                    a &&
                    a.brave &&
                    typeof a.brave.isBrave == i &&
                    (e[p] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return ((e[h] = n), ee.call(e, l, v.cpu), e);
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[f] = n),
                  (e[m] = n),
                  (e[_] = n),
                  ee.call(e, l, v.device),
                  S && !e[_] && y && y.mobile && (e[_] = C),
                  S &&
                    e[m] == "Macintosh" &&
                    a &&
                    typeof a.standalone !== s &&
                    a.maxTouchPoints &&
                    a.maxTouchPoints > 2 &&
                    ((e[m] = "iPad"), (e[_] = b)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return ((e[p] = n), (e[g] = n), ee.call(e, l, v.engine), e);
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[p] = n),
                  (e[g] = n),
                  ee.call(e, l, v.os),
                  S &&
                    !e[p] &&
                    y &&
                    y.platform &&
                    y.platform != "Unknown" &&
                    (e[p] = y.platform
                      .replace(/chrome os/i, G)
                      .replace(/macos/i, z)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return l;
              }),
              (this.setUA = function (e) {
                return (
                  (l = typeof e === c && e.length > L ? Z(e, L) : e),
                  this
                );
              }),
              this.setUA(l),
              this
            );
          };
        ((ae.VERSION = r),
          (ae.BROWSER = Q([p, g, d])),
          (ae.CPU = Q([h])),
          (ae.DEVICE = Q([m, f, _, y, C, v, b, S, R])),
          (ae.ENGINE = ae.OS = Q([p, g])),
          typeof e !== s
            ? (typeof l !== s && l.exports && (e = l.exports = ae),
              (e.UAParser = ae))
            : typeof t !== s && (t.UAParser = ae));
        var ie = typeof t !== s && (t.jQuery || t.Zepto);
        if (ie && !ie.ua) {
          var le = new ae();
          ((ie.ua = le.getResult()),
            (ie.ua.get = function () {
              return le.getUA();
            }),
            (ie.ua.set = function (e) {
              le.setUA(e);
              var t = le.getResult();
              for (var n in t) ie.ua[n] = t[n];
            }));
        }
      })(typeof window == "object" ? window : this);
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
