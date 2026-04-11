__d(
  "WAWebHandleAboutNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebStatusContactAction",
    "WAWebTextStatusCollection",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new (r("WADeprecatedWapParser"))(
        "incomingAboutNotification",
        function (e) {
          e.assertTag("notification");
          var t = { stanzaId: e.attrString("id") },
            n = e.hasChild("set") && e.child("set");
          return n && !n.hasAttr("hash")
            ? babelHelpers.extends(
                {
                  type: "change",
                  from: o("WAWebJidToWid").userJidToUserWid(
                    e.attrUserJid("from"),
                  ),
                  pushname: e.attrString("notify"),
                  content: n.contentString(),
                  ts: e.attrTime("t"),
                },
                t,
              )
            : n && n.hasAttr("hash")
              ? babelHelpers.extends(
                  {
                    type: "sideListChange",
                    from: o("WAWebJidToWid").userJidToUserWid(
                      e.attrUserJid("from"),
                    ),
                    hash: n.attrString("hash"),
                  },
                  t,
                )
              : babelHelpers.extends(
                  { type: "unknown", from: e.attrString("from") },
                  t,
                );
        },
      );
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          switch (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleAboutNotification: ",
                  " from=",
                  "",
                ])),
              e.type,
              e.from.toString(),
            ),
            e.type)
          ) {
            case "sideListChange": {
              var t = yield o("WAWebApiContact").getContactRecordByHash(e.hash);
              if (t == null)
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "side contact hash not found for status update",
                    ])),
                );
              else {
                var n = o("WAWebWidFactory").createUserWidOrThrow(t.id),
                  a = o("WAWebTextStatusCollection").TextStatusCollection.get(
                    n,
                  ),
                  i =
                    a == null
                      ? null
                      : o("WAWebStatusContactAction")
                          .getStatus(n)
                          .then(function (e) {
                            a.set({ status: e.status });
                          });
                yield i;
              }
              break;
            }
            case "change": {
              var l = e.from,
                m = [l],
                p = o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").asUserWidOrThrow(l),
                );
              p && m.push(p);
              for (var _ of m) {
                var f = o("WAWebTextStatusCollection").TextStatusCollection.get(
                  _,
                );
                f && e.content != null
                  ? (f.status = e.content)
                  : o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "handleAboutNotification: unknown contact ",
                          "",
                        ])),
                      _.toLogString(),
                    );
              }
              break;
            }
            default:
              (e.type,
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "handleAboutNotification: unhandled type ",
                      "",
                    ])),
                  e.type,
                ));
              break;
          }
          return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(e.stanzaId),
            to:
              e.from instanceof r("WAWebWid")
                ? o("WAWebCommsWapMd").JID(e.from)
                : o("WAWap").CUSTOM_STRING(e.from),
            class: "notification",
            type: "status",
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      var r = p.parse(t);
      return r.error
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            r.error.toString(),
          ),
          (m || (m = n("Promise"))).reject(r.error))
        : _(r.success);
    }
    l.handleAboutNotification = g;
  },
  98,
);
