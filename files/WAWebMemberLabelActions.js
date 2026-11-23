__d(
  "WAWebMemberLabelActions",
  ["WAWebMemberLabelJob", "WAWebMemberLabelKey", "WAWebMemberLabelModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o("WAWebMemberLabelJob").getMemberLabelsForGroups({
        chatId: e,
      });
      if (t)
        return Array.from(t.entries(), function (t) {
          var n = t[0],
            o = t[1],
            a = new (r("WAWebMemberLabelKey"))({ chatId: e, member: n }),
            i = new (r("WAWebMemberLabelModel"))();
          return (
            (i.id = a),
            (i.label = o.label),
            (i.lastEditTimestamp = o.lastEditTimestamp),
            i
          );
        });
    }
    l.getMemberLabelsForGroupAction = e;
  },
  98,
);
