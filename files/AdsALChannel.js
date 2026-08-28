__d(
  "AdsALChannel",
  ["ALChannel", "hyperionChannel", "hyperionTimedTrigger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("hyperionChannel").Channel),
      s = new e();
    r("ALChannel").pipe(s);
    var u = new e(),
      c = -1,
      d = [],
      m = null,
      p = !1;
    (s.pipe(u, function (e) {
      if (p) {
        e();
        return;
      }
      (d.push(e),
        m == null &&
          (m = new (o("hyperionTimedTrigger").TimedTrigger)(
            function () {
              m = null;
              var e = d;
              ((d = []),
                (p = !0),
                e.forEach(function (e) {
                  return e();
                }),
                (p = !1));
            },
            c,
            !0,
          )));
    }),
      s.addListener("al_ui_event_capture", function (e) {
        if (e.event === "click") {
          var t;
          if (
            (e.element != null &&
              e.element.nodeName === "A" &&
              (t = e.element.getAttribute("href")),
            t == null)
          ) {
            var n,
              r = (n = e.domEvent) == null ? void 0 : n.target;
            r instanceof HTMLElement &&
              r.nodeName === "A" &&
              (t = r.getAttribute("href"));
          }
          if (t != null) {
            var o;
            ((e.metadata.target_url = t), (o = m) == null || o.run());
          }
        }
      }),
      window.addEventListener("beforeUnload", function () {
        var e;
        ((e = m) == null || e.run(), (p = !0));
      }),
      (l.AdsALChannel = s),
      (l.AdsALAsyncChannel = u));
  },
  98,
);
