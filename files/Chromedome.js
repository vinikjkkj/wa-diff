__d(
  "Chromedome",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      if (document.domain == null) return null;
      var e = document.domain,
        t = /^intern\./.test(e);
      if (t) return null;
      var n = /(^|\.)facebook\.(com|sg)$/.test(e);
      if (n) return "facebook";
      var r = /(^|\.)instagram\.com$/.test(e);
      if (r) return "instagram";
      var o = /(^|\.)threads\.(com|net)$/.test(e);
      if (o) return "threads";
      var a = /(^|\.)messenger\.com$/.test(e);
      return a ? "messenger" : null;
    }
    function u(e) {
      return e === "instagram"
        ? s._(
            /*BTDS*/ 'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable an Instagram feature or "hack" someone\'s account, it is a scam and will give them access to your Instagram account.',
          )
        : e === "threads"
          ? s._(
              /*BTDS*/ 'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Threads feature or "hack" someone\'s account, it is a scam and will give them access to your Threads account.',
            )
          : s._(
              /*BTDS*/ "This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it's a scam and will give them access to your Facebook account.",
            );
    }
    function c(t) {
      if (top === window) {
        var n = e();
        if (n != null) {
          var r = s._(/*BTDS*/ "Stop!"),
            o = u(n),
            a = s._(
              /*BTDS*/ "See https:\/\/www.facebook.com\/selfxss for more information.",
            ),
            i = "font-family:helvetica; font-size:20px; ";
          [
            [
              r,
              i +
                "font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;",
            ],
            [o, i],
            [a, i],
            ["", ""],
          ].map(function (e) {
            window.setTimeout(
              console.log.bind(console, "\n%c" + e[0].toString(), e[1]),
            );
          });
        }
      }
    }
    l.start = c;
  },
  226,
);
