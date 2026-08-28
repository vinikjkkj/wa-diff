__d(
  "Primer",
  [
    "invariant",
    "Bootloader",
    "CSS",
    "Env",
    "Event",
    "Parent",
    "PhotoSnowliftLoader",
    "PrimerInlineHandlers",
    "ReactServerPrimer",
    "TimeSlice",
    "clickRefAction",
    "firstClickTimestamp",
    "ifRequired",
    "performanceNow",
    "requireDeferred",
    "trackReferrer",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = r("requireDeferred")("AsyncRequest").__setRef("Primer"),
      d = null,
      m = /async(?:-post)?|dialog(?:-post)?|theater|toggle/,
      p = document.documentElement;
    p != null || s(0, 2301);
    function _(t, n, a, i, l) {
      o("firstClickTimestamp").setIfFirstClick(
        n,
        (e || (e = r("performanceNow")))(),
      );
      var d = n.getAttribute("ajaxify"),
        p = n.href,
        _ = i != null && i !== "" ? i : d || p;
      if (
        (_ && r("clickRefAction")("a", n, t).coalesce_namespace("primer"),
        d && p && !/#$/.test(p))
      ) {
        var f = t.which && t.which === 2,
          g = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
        if (f || g) return;
      }
      var h = o("PrimerInlineHandlers").run(a, t, "data-onclick");
      r("trackReferrer")(n, _);
      var y = l || n.rel;
      ((y = y && y.match(m)), (y = y && y[0]));
      var C = "Primer: " + y;
      switch (y) {
        case "dialog":
        case "dialog-post":
          r("Bootloader").loadModules(
            ["AsyncDialog"],
            function (e) {
              e.bootstrap(_, n, y);
            },
            C,
          );
          break;
        case "async":
        case "async-post":
          c.loadImmediately(function (e) {
            e.bootstrap(_, n, y === "async-post");
          });
          break;
        case "theater":
          (u || (u = r("Env"))).isCQuick
            ? r("ifRequired")("PageTransitions", function (e) {
                e.go(_);
              })
            : o("PhotoSnowliftLoader").load(_, n, C);
          break;
        case "toggle":
          var b = n.parentNode;
          (b != null || s(0, 2302),
            o("CSS").toggleClass(b, "openToggler"),
            r("Bootloader").loadModules(
              ["Toggler"],
              function (e) {
                n.parentNode != null && e.bootstrap(n);
              },
              C,
            ));
          break;
        default:
          return (
            r("ifRequired")(
              "PageTransitionsRegistrar",
              function (e) {
                e.__onClick(t);
              },
              function () {},
            ),
            h
          );
      }
      return !1;
    }
    (r("Event").listen(
      document,
      "click",
      function (e) {
        var t = null;
        if (((e = e || window.event), !(e.button >= 2))) {
          d = e.target || e.srcElement;
          var n = o("Parent").byTag(d, "A");
          return (
            n instanceof HTMLAnchorElement
              ? (t = _(e, n, d))
              : (t = o("PrimerInlineHandlers").run(d, e, "data-onclick")),
            t == null &&
              (t = o("ReactServerPrimer").handleEvent("data-sr-onclick", e, d)),
            t
          );
        }
      },
      r("Event").Priority._BUBBLE,
    ),
      r("Event").listen(
        document,
        "submit",
        function (e) {
          var t = e.getTarget(),
            n = t && t.getAttribute("action"),
            o = t && t.getAttribute("data-react-action") === "true";
          if (!(n != null && o)) {
            var a = t && t.getAttribute("rel");
            if (t && t.nodeName == "FORM" && (a == "async" || a === "dialog")) {
              r("clickRefAction")("f", t, e).coalesce_namespace("primer");
              var i = d;
              switch (a) {
                case "async":
                  r("Bootloader").loadModules(
                    ["FormSubmit"],
                    function (e) {
                      e.send(t, i);
                    },
                    "Primer: async",
                  );
                  break;
                case "dialog":
                  r("Bootloader").loadModules(
                    ["FormSubmit", "AsyncDialog"],
                    function (e, n) {
                      var r = e.buildRequest(t, i);
                      r && n.send(r);
                    },
                    "Primer: form dialog",
                  );
                  break;
              }
              return !1;
            } else
              return r("ifRequired")("PageTransitionsRegistrar", function (t) {
                return t.__onSubmit(e, d);
              });
          }
        },
        r("Event").Priority._BUBBLE,
      ));
    var f = null,
      g = function (t, n) {
        ((n = n || window.event), (f = n.target || n.srcElement));
        var e = o("PrimerInlineHandlers").run(f, n, "data-on" + t);
        (y(),
          t === "mouseover" &&
            (C(),
            e == null &&
              f &&
              (e = o("ReactServerPrimer").handleEvent(
                "data-sr-onmouseover",
                n,
                f,
              ))));
      },
      h = function (t, n) {
        ((n = n || window.event), (f = n.relatedTarget || n.toElement));
      },
      y = function () {
        var e = f,
          t = o("Parent").byAttribute(f, "data-hover");
        if (t) {
          switch (t.getAttribute("data-hover")) {
            case "tooltip":
              r("Bootloader").loadModules(
                ["Tooltip"],
                function (n) {
                  f === e && n.process(t, f);
                },
                "Primer: tooltip",
              );
              break;
          }
          return;
        }
      },
      C = function () {
        var e = f,
          t = o("Parent").byAttribute(e, "data-hovercard");
        t &&
          r("Bootloader").loadModules(
            ["Hovercard"],
            function (n) {
              f === e && n.processNode(t);
            },
            "Primer: hovercard",
          );
      };
    ((p.onmouseover = r("TimeSlice").guard(
      g.bind(null, "mouseover"),
      "Primer mouseover",
    )),
      (p.onmouseout = r("TimeSlice").guard(
        h.bind(null, "mouseout"),
        "Primer mouseout",
      )));
    var b = r("TimeSlice").guard(g.bind(null, "focus"), "Primer focus");
    p.addEventListener
      ? p.addEventListener("focus", b, !0)
      : p.attachEvent("onfocusin", b);
    var v = r("TimeSlice").guard(g.bind(null, "keypress"), "Primer keypress");
    (p.addEventListener && p.addEventListener("keypress", v, !0),
      (l.primerHandleAjaxify = _));
  },
  98,
);
