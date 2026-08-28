__d(
  "queryThenMutateDOM",
  [
    "ErrorUtils",
    "Run",
    "TimeSlice",
    "emptyFunction",
    "gkx",
    "requestAnimationFrame",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s,
      u = [],
      c = {};
    function d(e, t, r) {
      if (!e && !t) return { cancel: n("emptyFunction") };
      if (r != null && r !== "" && Object.prototype.hasOwnProperty.call(c, r))
        return { cancel: n("emptyFunction") };
      r != null && r !== "" && (c[r] = 1);
      var o = n("TimeSlice").guard(
          t || n("emptyFunction"),
          "queryThenMutateDOM mutation callback",
          {
            propagationType: n("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0,
          },
        ),
        a = n("TimeSlice").guard(
          e || n("emptyFunction"),
          "queryThenMutateDOM query callback",
          {
            propagationType: n("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0,
          },
        ),
        i = { queryFunction: a, mutateFunction: o, output: null, deleted: !1 };
      return (
        u.push(i),
        p(),
        l ||
          ((l = !0),
          n("gkx")("20935") ||
            n("Run").onLeave(function () {
              ((l = !1), (s = !1), (c = {}), (u.length = 0));
            })),
        {
          cancel: function () {
            ((i.deleted = !0), r != null && r !== "" && delete c[r]);
          },
        }
      );
    }
    d.prepare = function (e, t, n) {
      return function () {
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        o.unshift(this);
        var i = Function.prototype.bind.apply(e, o),
          l = t.bind(this);
        d(i, l, n);
      };
    };
    var m = n("TimeSlice").guard(
      function (e) {
        for (; u.length; ) {
          c = {};
          var t = [];
          for (window.document.body.getClientRects(); u.length; ) {
            var n = u.shift();
            n.deleted || ((n.output = _(n.queryFunction)), t.push(n));
          }
          for (; t.length; ) {
            var r = t.shift();
            r.deleted || _(r.mutateFunction, null, [r.output]);
          }
        }
        s = !1;
      },
      "queryThenMutateDOM runScheduledQueriesAndMutations",
      { propagationType: n("TimeSlice").PropagationType.ORPHAN },
    );
    function p() {
      !s && u.length && ((s = !0), n("requestAnimationFrame")(m));
    }
    function _(t, r, o, a, i) {
      return (e || (e = n("ErrorUtils"))).applyWithGuard(t, r, o, a, i);
    }
    a.exports = d;
  },
  null,
);
