__d(
  "ghlTestUBTFacebook",
  [
    "ConstUriUtils",
    "FBLogger",
    "GHLBox",
    "Promise",
    "cr:1088657",
    "ghlInternalBumpODSKey",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        var e = o("ConstUriUtils").getUri(t);
        if (e == null)
          throw r("FBLogger")("ad_blocker_defense_ghost_owl").mustfixThrow(
            "URI cannot be null in ghlTestUBTFacebook.",
          );
        return e;
      },
      u = function (r) {
        return new (e || (e = n("Promise")))(function (e) {
          var t = window.atob,
            n = document.body;
          if (t == null || n == null) {
            e(!1);
            return;
          }
          var o = document.createElement("div");
          ((o.className = r.map(t).join(" ")), n.appendChild(o));
          var a = p(o);
          if (a && a.MozBinding && a.MozBinding.startsWith("url")) {
            setTimeout(function () {
              return e(o.clientWidth === 0);
            }, 5e3);
            return;
          }
          e((a == null ? void 0 : a.display) === "none");
        });
      },
      c = function () {
        return new (e || (e = n("Promise")))(function (e) {
          var t = document.body;
          if (t == null) {
            e(!1);
            return;
          }
          var n = document.createElement("img");
          (n.setAttribute("alt", ""),
            t.appendChild(n),
            (n.onload = function () {
              var t = p(n);
              (e((t == null ? void 0 : t.display) === "none"),
                n.parentNode && n.parentNode.removeChild(n));
            }),
            (n.onerror = function () {
              (e(!0), n.parentNode && n.parentNode.removeChild(n));
            }),
            (n.src = s(
              "https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png",
            ).toString()));
        });
      },
      d = null,
      m = function (a) {
        (d == null &&
          (h("init"),
          (d = new (e || (e = n("Promise")))(function (t) {
            return r("promiseDone")(
              (e || (e = n("Promise"))).all([
                u(_),
                c(),
                u([f(g)]),
                o("GHLBox").r(),
              ]),
              function (e) {
                var n = e[0],
                  r = e[1],
                  a = e[2],
                  i = e[3];
                h("done", n, r, a);
                var l = n || r || a;
                (l ? o("GHLBox").s(Date.now()) : o("GHLBox").i(), t([l, i]));
              },
            );
          }))),
          r("promiseDone")(d, function (e) {
            return a(e[0], e[1]);
          }),
          n("cr:1088657") && n("cr:1088657").i());
      },
      p = function (t) {
        return window.getComputedStyle(t);
      },
      _ = ["QWRCb3g=", "QWQ=", "YWR2ZXJ0", "cG9zdC1hZHM="],
      f = function (t) {
        return t[Math.floor(Math.random() * t.length)];
      },
      g = [
        "UmVjdGFuZ2xlQWQ=",
        "YWR2ZXJ0aXNpbmdfd2lkZ2V0",
        "ZG93bmxvYWRfbGlua19zcG9uc29yZWQ=",
        "c3BvbnNvclBvc3Q=",
        "d2lkZ2V0U3BvbnNvcnM=",
        "b2ItaG92ZXI=",
        "ZGZwX3VuaXQ=",
      ],
      h = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return r("ghlInternalBumpODSKey")("ghlTestUBT", String(t.join(".")));
      },
      y = m;
    l.default = y;
  },
  98,
);
