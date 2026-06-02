__d(
  "WAWebHandleAboutNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new (r("WADeprecatedWapParser"))(
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
    async function m(t) {
      switch (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleAboutNotification: ",
              " from=",
              "",
            ])),
          t.type,
          t.from.toString(),
        ),
        t.type)
      ) {
        case "sideListChange": {
          var n = await o("WAWebApiContact").getContactRecordByHash(t.hash);
          n == null
            ? o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "side contact hash not found for status update",
                  ])),
              )
            : o("WAWebBackendApi").frontendFireAndForget("refreshTextStatus", {
                contactId: n.id,
              });
          break;
        }
        case "change": {
          var a = t.from,
            i = [a.toString()],
            l = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(a),
            );
          (l && i.push(l.toString()),
            o("WAWebBackendApi").frontendFireAndForget("updateTextStatuses", {
              ids: i,
              content: t.content,
            }));
          break;
        }
        default:
          (t.type,
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleAboutNotification: unhandled type ",
                  "",
                ])),
              t.type,
            ));
          break;
      }
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(t.stanzaId),
        to:
          t.from instanceof r("WAWebWid")
            ? o("WAWebCommsWapMd").JID(t.from)
            : o("WAWap").CUSTOM_STRING(t.from),
        class: "notification",
        type: "status",
      });
    }
    function p(e) {
      var t = d.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          Promise.reject(t.error))
        : m(t.success);
    }
    l.handleAboutNotification = p;
  },
  98,
);
