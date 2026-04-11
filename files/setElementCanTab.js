__d(
  "setElementCanTab",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex"),
      l = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex"),
      s = function (t) {
        return t;
      },
      u = e ? e.set : s,
      c = l ? l.set : s;
    function d(e) {
      return e instanceof SVGElement ? c : u;
    }
    function m(e, t, n) {
      n === void 0 && (n = !1);
      var r = e._tabIndexState,
        o = d(e);
      if (r)
        r.canTab !== t &&
          typeof o == "function" &&
          (o.call(e, t ? r.value : -1), (r.canTab = t));
      else {
        t && n && e.tabIndex < 0 && (e.tabIndex = 0);
        var a = { value: e.tabIndex, canTab: t };
        ((e._tabIndexState = a),
          t || (e.tabIndex = -1),
          Object.defineProperty(e, "tabIndex", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return a.canTab ? a.value : -1;
            },
            set: function (t) {
              (a.canTab && typeof o == "function" && o.call(this, t),
                (a.value = t));
            },
          }));
      }
    }
    function p(e) {
      var t = e._tabIndexState;
      return t ? t.canTab : e.tabIndex > 0;
    }
    ((i.setElementCanTab = m), (i.canElementTab = p));
  },
  66,
);
