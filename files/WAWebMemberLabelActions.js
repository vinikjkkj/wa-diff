__d(
  "WAWebMemberLabelActions",
  [
    "WAWebMemberLabelJob",
    "WAWebMemberLabelKey",
    "WAWebMemberLabelModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMemberLabelJob").getMemberLabelsForGroups({
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
        })),
        s.apply(this, arguments)
      );
    }
    l.getMemberLabelsForGroupAction = e;
  },
  98,
);
