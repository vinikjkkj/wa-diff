__d(
  "clickRefAction",
  ["Arbiter"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n, r, o, a) {
        var e = this;
        ((this.set_namespace = function (t) {
          return ((e.ns = t), e);
        }),
          (this.coalesce_namespace = function (t) {
            return (e.ns === null && (e.ns = t), e);
          }),
          (this.add_event = function () {
            return e;
          }));
        var i = t + "/" + n;
        ((this.ue = i),
          (this.ue_ts = t),
          (this.ue_count = n),
          (this.context = r),
          (this.ns = null),
          (this.node = o),
          (this.type = a));
      },
      s = 0,
      u = [],
      c = Date.now() + 6e4;
    function d(t, n, o, a, i) {
      var l = Date.now(),
        d = o && o.type;
      ((i = i || {}), !n && o && (n = o.getTarget()));
      var m = 50;
      if (n && a != "FORCE") {
        for (var p = u.length - 1; p >= 0 && l - u[p].ue_ts < m; --p)
          if (u[p].node == n && u[p].type == d) return u[p];
      }
      var _ = new e(l, s, t, n, d);
      for (u.push(_); u[0].ue_ts + m < l || u.length > 10; ) u.shift();
      var f = l < c ? "persistent" : "event";
      return (
        t == "contextmenu"
          ? r("Arbiter").inform(
              "ClickRefAction/contextmenu",
              { cfa: _, node: n, mode: a, event: o, extra_data: i },
              f,
            )
          : t == "middleclick"
            ? r("Arbiter").inform(
                "ClickRefAction/middleclick",
                { cfa: _, node: n, mode: a, event: o, extra_data: i },
                f,
              )
            : r("Arbiter").inform(
                "ClickRefAction/new",
                { cfa: _, node: n, mode: a, event: o, extra_data: i },
                f,
              ),
        s++,
        _
      );
    }
    var m = (t.clickRefAction = d);
    l.default = m;
  },
  98,
);
