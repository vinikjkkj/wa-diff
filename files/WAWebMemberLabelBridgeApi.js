__d(
  "WAWebMemberLabelBridgeApi",
  ["WALogger", "WAWebMemberLabelCollection", "WAWebMemberLabelKey"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return { type: "DELETE", data: { chatId: e, member: t } };
    }
    function c(e, t, n) {
      return { type: "UPSERT", data: { chatId: e, member: t, memberLabel: n } };
    }
    var d = {
      updateMemberLabelCollection: function (n) {
        var t = n.updates;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[updateMemberLabelsModel] processing ",
              " updates",
            ])),
          t.length,
        );
        var a = [],
          i = [],
          l = 0;
        (t.forEach(function (e) {
          var t = e.data,
            n = e.type,
            o = t.chatId,
            s = t.member,
            u = t.memberLabel,
            c = new (r("WAWebMemberLabelKey"))({ chatId: o, member: s });
          switch (n) {
            case "UPSERT": {
              if (u == null) {
                l++;
                return;
              }
              a.push({
                id: c,
                label: u.label,
                lastEditTimestamp: u.lastEditTimestamp,
              });
              break;
            }
            case "DELETE": {
              i.push(c);
              break;
            }
          }
        }),
          l > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[updateMemberLabelsModel] ",
                  " memberLabel(s) null for upsert",
                ])),
              l,
            ),
          a.length > 0 && r("WAWebMemberLabelCollection").add(a, { merge: !0 }),
          i.length > 0 && r("WAWebMemberLabelCollection").remove(i));
      },
    };
    ((l.createDelete = u), (l.createUpsert = c), (l.MemberLabelBridgeApi = d));
  },
  98,
);
