__d(
  "QLogEvent",
  [
    "DoubleKeyMap",
    "FBLogger",
    "NestedTimeRange",
    "QPLEvent",
    "SimpleHook",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (o("DoubleKeyMap").DoubleKeyMap)(),
      c = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t, r) || this),
            (o.$QPLRange$p_1 = n),
            u.set(n, o.fullname(), o),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__onStart = function (n) {
            (e.prototype.__onStart.call(this, n),
              this.$QPLRange$p_1.point(this.fullname() + "_START", {
                timestamp: n,
              }));
          }),
          (n.__onStop = function (n) {
            (e.prototype.__onStop.call(this, n),
              this.$QPLRange$p_1.point(this.fullname() + "_END", {
                timestamp: n,
              }),
              u.delete(this.$QPLRange$p_1, this.fullname()));
          }),
          (n.range = function (n) {
            var e;
            this.fullname().startsWith(
              o("NestedTimeRange").TIME_RANGE_LEVEL_SEPARATOR,
            ) ||
              r("FBLogger")("qpl").warn(
                "Range %s cannot have subrange since root name does not start with /",
                this.fullname(),
              );
            var a = o("NestedTimeRange").rangeFullName(this.fullname(), n);
            return (e = u.get(this.$QPLRange$p_1, a)) != null
              ? e
              : new t(n, this.$QPLRange$p_1, this);
          }),
          t
        );
      })(o("NestedTimeRange").NestedTimeRange),
      d = new (o("DoubleKeyMap").DoubleKeyMap)(),
      m = new (s = o("SimpleHook")).SimpleHook(),
      p = new s.SimpleHook(),
      _ = new s.SimpleHook(),
      f = new s.SimpleHook(),
      g = (function (t) {
        function n(n, r, a, i, l) {
          var s;
          (r === void 0 && (r = 0),
            a === void 0 && (a = 2),
            i === void 0 && (i = !1));
          var u = (e || (e = o("QPLEvent"))).getMarkerId(n);
          return (
            (s = t.call(this, "event_" + u) || this),
            (s.event = n),
            (s.instanceKey = r),
            (s.$QPLEvent$p_1 = a),
            (s.isUserFlow = i),
            (s.$QPLEvent$p_2 = l),
            d.set(u, r, s),
            s
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.action = function (t) {
            return ((this.$QPLEvent$p_1 = t), this);
          }),
          (a.getAction = function () {
            return this.$QPLEvent$p_1;
          }),
          (a.setIsUserFlow = function (t) {
            return ((this.isUserFlow = t), this);
          }),
          (a.startFromNavStart = function () {
            return (this.start(r("performanceNavigationStart")()), this);
          }),
          (a.startFromTime = function (t) {
            return (this.start(t), this);
          }),
          (a.__onStart = function (t) {
            var e;
            ((e = this.$QPLEvent$p_2) == null || e.onStart(this, t),
              m.call(this, t));
          }),
          (a.__onStop = function (n) {
            var t;
            ((t = this.$QPLEvent$p_2) == null || t.onStop(this, n),
              p.call(this, n),
              u.deleteAll(this),
              d.delete(
                (e || (e = o("QPLEvent"))).getMarkerId(this.event),
                this.instanceKey,
              ));
          }),
          (a.range = function (t) {
            var e;
            return (e = u.get(this, t)) != null ? e : new c(t, this);
          }),
          (a.point = function (t, n) {
            var e;
            return (
              n === void 0 && (n = {}),
              (e = this.$QPLEvent$p_2) == null || e.onPoint(this, t, n),
              _.call(this, t, n),
              this
            );
          }),
          (a.annotate = function (t) {
            var e;
            return (
              (e = this.$QPLEvent$p_2) == null || e.onAnnotate(this, t),
              f.call(this, t),
              this
            );
          }),
          n
        );
      })(o("NestedTimeRange").NestedTimeRange);
    function h(t, n, r) {
      var a;
      return (
        n === void 0 && (n = 0),
        (a = d.get((e || (e = o("QPLEvent"))).getMarkerId(t), n)) != null
          ? a
          : new g(t, n, 2, !1, r)
      );
    }
    ((l.OnEventStart = m),
      (l.OnEventStop = p),
      (l.OnEventPoint = _),
      (l.OnEventAnnotate = f),
      (l.QPLEvent = g),
      (l.event = h));
  },
  98,
);
