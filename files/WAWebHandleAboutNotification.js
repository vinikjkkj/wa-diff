__d(
  "WAWebHandleAboutNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
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
      m = new (r("WADeprecatedWapParser"))(
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              t == null
                ? o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "side contact hash not found for status update",
                      ])),
                  )
                : o("WAWebBackendApi").frontendFireAndForget(
                    "refreshTextStatus",
                    { contactId: t.id },
                  );
              break;
            }
            case "change": {
              var n = e.from,
                a = [n.toString()],
                i = o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").asUserWidOrThrow(n),
                );
              (i && a.push(i.toString()),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateTextStatuses",
                  { ids: a, content: e.content },
                ));
              break;
            }
            default:
              (e.type,
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        _.apply(this, arguments)
      );
    }
    function f(t) {
      var r = m.parse(t);
      return r.error
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            r.error.toString(),
          ),
          (d || (d = n("Promise"))).reject(r.error))
        : p(r.success);
    }
    l.handleAboutNotification = f;
  },
  98,
);
