__d(
  "WAWebMexFetchNewsletterMessageReactionSenderListJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery.graphql",
            ));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = { input: { id: e, server_id: t } },
            i = yield o("WAWebMexClient").fetchQuery(u, a),
            l = i.xwa2_newsletters_reaction_sender_list;
          return l == null
            ? (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][NEWSLETTER] fetch reaction senders failed nid=",
                      " msgId=",
                      "",
                    ])),
                  e,
                  t,
                )
                .tags("GQL", "mex"),
              null)
            : {
                reactions:
                  (n =
                    (r = l.reactions) == null
                      ? void 0
                      : r.map(function (e) {
                          var t = e.reaction_code,
                            n = e.sender_list;
                          return {
                            reactionCode: t,
                            senderList:
                              n == null
                                ? void 0
                                : n.edges.map(function (e) {
                                    var t = e.node,
                                      n = t.id,
                                      r = t.profile_pic_direct_path,
                                      a =
                                        n != null
                                          ? o("WAWebWidFactory").createWid(n)
                                          : null;
                                    return { id: a, profileUrl: r };
                                  }),
                          };
                        })) != null
                    ? n
                    : [],
              };
        })),
        d.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterMessageReactionSenderList = c;
  },
  98,
);
