__d(
  "WAWebMessageListStableGroupKeys",
  [
    "WAWebBoolFunc",
    "WAWebMessageListGenerateMsgListRows",
    "WAWebMessageListRowRenderers",
    "WAWebMsgGetters",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useInsertionEffect,
      c = "msg-group-",
      d = null;
    function m(e, t, n, o, a, i, l, s) {
      var u = r("WAWebMessageListGenerateMsgListRows")(
        p(e, t),
        n,
        o,
        a,
        i,
        l,
        s,
      );
      return _(e, u);
    }
    function p(e, t) {
      var n = r("WAWebMessageListRowRenderers")(t),
        a = R(e),
        i = C();
      a.pending = i;
      var l = null,
        u = function (n) {
          return (
            l != null ||
              (l = new Set(
                t.msgs.map(function (e) {
                  return e.id.toString();
                }),
              )),
            l.has(n)
          );
        },
        c = n.msgGroup;
      return babelHelpers.extends({}, n, {
        msgGroup: function (t) {
          var e = c(t),
            n = t.flatMap(function (e) {
              return e.type === "msg"
                ? [e.msg.id.toString()]
                : e.msgs.map(function (e) {
                    return e.id.toString();
                  });
            }),
            r = t.some(function (e) {
              var t = e.type === "msg" ? [e.msg] : e.msgs;
              return t.some(function (e) {
                return (
                  o("WAWebMsgGetters").getIsViewOnce(e.unsafe()) ||
                  e.forwardedNewsletterMessageInfo != null
                );
              });
            });
          return s.cloneElement(e, { key: b(a, i, n, r, u) });
        },
      });
    }
    function _(e, t) {
      var n,
        r = (n = d) == null || (n = n.get(e)) == null ? void 0 : n.pending;
      return r == null
        ? [].concat(t)
        : [].concat(t, [
            s.jsx(
              f,
              { frame: r, owner: e },
              "msg-list-stable-group-keys-commit",
            ),
          ]);
    }
    function f(e) {
      var t = e.frame,
        n = e.owner;
      return (
        u(
          function () {
            g(n, t);
          },
          [n, t],
        ),
        null
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      var n,
        r = (n = d) == null ? void 0 : n.get(e);
      r == null ||
        r.lastCommitted === t ||
        ((r.lastCommitted = t),
        (r.committed = t.assignment),
        (r.committedFirstMsgIds = t.firstMsgIds));
    }
    function h(e) {
      var t;
      return (t = d) == null || (t = t.get(e)) == null ? void 0 : t.pending;
    }
    function y() {
      return {
        committed: new Map(),
        committedFirstMsgIds: new Map(),
        nextKeyNumber: 0,
        pending: null,
        lastCommitted: null,
      };
    }
    function C() {
      return { assignment: new Map(), firstMsgIds: new Map(), used: new Set() };
    }
    function b(e, t, n, r, a) {
      (r === void 0 && (r = !1),
        a === void 0 && (a = o("WAWebBoolFunc").returnTrue));
      var i = n[0],
        l = v(e, t, n, a);
      (l != null && r && e.committedFirstMsgIds.get(l) !== i && (l = null),
        l == null && ((l = c + String(e.nextKeyNumber)), e.nextKeyNumber++),
        t.used.add(l),
        t.firstMsgIds.set(l, i));
      for (var s of n) t.assignment.set(s, l);
      return l;
    }
    function v(e, t, n, r) {
      for (var o of n) {
        var a = e.committed.get(o);
        if (
          a != null &&
          !t.used.has(a) &&
          S(e.committedFirstMsgIds.get(a), n, r)
        )
          return a;
      }
      return null;
    }
    function S(e, t, n) {
      return e == null || t.includes(e) || !n(e);
    }
    function R(e) {
      var t = d;
      t == null && ((t = new WeakMap()), (d = t));
      var n = t.get(e);
      return (n == null && ((n = y()), t.set(e, n)), n);
    }
    ((l.generateMsgListRowsWithStableGroupKeys = m),
      (l.createRowRenderersWithStableGroupKeys = p),
      (l.appendStableGroupKeysCommit = _),
      (l.commitGroupKeyFrame = g),
      (l.getPendingGroupKeyFrame = h),
      (l.createGroupKeyState = y),
      (l.createGroupKeyFrame = C),
      (l.assignGroupKey = b));
  },
  98,
);
