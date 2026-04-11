__d(
  "TimingAnnotations",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.addStringAnnotation = function (t, n) {
            return this;
          }),
          (t.addSetAnnotation = function (t, n) {
            return this;
          }),
          (t.addSetElement = function (t, n) {
            return this;
          }),
          (t.registerOnBeforeSend = function (t) {
            return this;
          }),
          (t.addVectorAnnotation = function (t, n) {
            return this;
          }),
          (t.addVectorElement = function (t, n) {
            return this;
          }),
          e
        );
      })(),
      l = (function () {
        function e() {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = []));
        }
        var t = e.prototype;
        return (
          (t.addStringAnnotation = function (t, n) {
            return ((this.$2 = this.$2 || new Map()), this.$2.set(t, n), this);
          }),
          (t.addSetAnnotation = function (t, n) {
            var e = this.$1 || new Map(),
              r = e.get(t) || new Set();
            return (
              n.forEach(function (e) {
                return r.add(e);
              }),
              e.set(t, r),
              (this.$1 = e),
              this
            );
          }),
          (t.addSetElement = function (t, n) {
            var e = this.$1 || new Map(),
              r = e.get(t) || new Set();
            return (r.add(n), e.set(t, r), (this.$1 = e), this);
          }),
          (t.addVectorAnnotation = function (t, n) {
            return ((this.$3 = this.$3 || new Map()), this.$3.set(t, n), this);
          }),
          (t.addVectorElement = function (t, n) {
            var e = (this.$3 = this.$3 || new Map()),
              r = this.$3.get(t) || [];
            return (r.push(n), e.set(t, r), this);
          }),
          (t.registerOnBeforeSend = function (t) {
            return (this.$4.push(t), this);
          }),
          (t.prepareToSend = function () {
            var e = this;
            (this.$4.forEach(function (t) {
              return t(e);
            }),
              (this.$4 = []));
            var t = {};
            if (this.$1 != null)
              for (var n of this.$1) {
                var r = n[0],
                  o = n[1];
                t[r] = Array.from(o.values());
              }
            var a = {};
            if (this.$2 != null)
              for (var i of this.$2) {
                var l = i[0],
                  s = i[1];
                a[l] = s;
              }
            var u = {};
            if (this.$3 != null)
              for (var c of this.$3) {
                var d = c[0],
                  m = c[1];
                u[d] = m;
              }
            return { setProps: t, stringProps: a, vectorProps: u };
          }),
          (e.combine = function (t, n) {
            var e;
            return (
              t != null && n != null
                ? ((t.stringProps = babelHelpers.extends(
                    {},
                    n.stringProps,
                    t.stringProps,
                  )),
                  (t.setProps = babelHelpers.extends(
                    {},
                    n.setProps,
                    t.setProps,
                  )),
                  (e = t))
                : t != null
                  ? (e = t)
                  : n != null && (e = n),
              e
            );
          }),
          e
        );
      })();
    ((l.EmptyTimingAnnotations = e),
      (l.EmptyTraceTimingAnnotations = e),
      (l.TraceTimingAnnotations = l),
      (i.default = l));
  },
  66,
);
