__d(
  "WAWebDBPollsGetParentMessages",
  [
    "WANullthrows",
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
              e,
              null,
            ),
            n = t[0],
            r = t[1],
            a = new Map(),
            i = [];
          for (var l of r) {
            var s = n.get(u(l));
            s == null || s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
              ? i.push(l)
              : a.set(l, s);
          }
          return { pollUpdateMsgsToParentMsgs: a, orphans: i };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return r("WANullthrows")(e.pollUpdateParentKey).toString();
    }
    l.getParentMessages = e;
  },
  98,
);
