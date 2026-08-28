__d(
  "ViewportBounds",
  [
    "Arbiter",
    "ArbiterMixin",
    "BlueBar",
    "ExecutionEnvironment",
    "PageEvents",
    "Vector",
    "emptyFunction",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { top: [], right: [], bottom: [], left: [] };
    function u(e) {
      return function () {
        return s[e].reduce(function (e, t) {
          return Math.max(e, t.getSize());
        }, 0);
      };
    }
    function c(e, t) {
      return function (n) {
        return new d(e, n, t);
      };
    }
    var d = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = !1),
          (this.getSide = r("emptyFunction").thatReturns(e)),
          (this.getSize = function () {
            return typeof t == "function" ? t() : t;
          }),
          (this.isPersistent = r("emptyFunction").thatReturns(n)),
          s[e].push(this),
          m.inform("change"));
      }
      var t = e.prototype;
      return (
        (t.remove = function () {
          (r("removeFromArray")(s[this.getSide()], this), m.inform("change"));
        }),
        e
      );
    })();
    r("Arbiter").subscribe(r("PageEvents").AJAXPIPE_ONUNLOAD, function () {
      ["top", "right", "bottom", "left"].forEach(function (e) {
        for (var t = s[e], n = t.length - 1; n >= 0; n--) {
          var r = t[n];
          r.isPersistent() || r.remove();
        }
      });
    });
    var m = babelHelpers.extends({}, r("ArbiterMixin"), {
      getTop: u("top"),
      getRight: u("right"),
      getBottom: u("bottom"),
      getLeft: u("left"),
      getElementPosition: function (t) {
        var e = r("Vector").getElementPosition(t);
        return ((e.y -= m.getTop()), e);
      },
      addTop: c("top"),
      addRight: c("right"),
      addBottom: c("bottom"),
      addLeft: c("left"),
      addPersistentTop: c("top", !0),
      addPersistentRight: c("right", !0),
      addPersistentBottom: c("bottom", !0),
      addPersistentLeft: c("left", !0),
    });
    m.addPersistentTop(function () {
      if (
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        o("BlueBar").hasFixedBlueBar()
      ) {
        var t = o("BlueBar").getMaybeFixedRoot();
        return t ? t.offsetHeight : 0;
      }
      return 0;
    });
    var p = m;
    l.default = p;
  },
  98,
);
