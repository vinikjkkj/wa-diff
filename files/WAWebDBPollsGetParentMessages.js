__d(
  "WAWebDBPollsGetParentMessages",
  ["WANullthrows", "WAWebAddonProcessMsgsUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
          e,
          null,
        ),
        n = t[0],
        r = t[1],
        a = new Map(),
        i = [];
      for (var l of r) {
        var u = n.get(s(l));
        u == null || u.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
          ? i.push(l)
          : a.set(l, u);
      }
      return { pollUpdateMsgsToParentMsgs: a, orphans: i };
    }
    function s(e) {
      return r("WANullthrows")(e.pollUpdateParentKey).toString();
    }
    l.getParentMessages = e;
  },
  98,
);
