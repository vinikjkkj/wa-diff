__d(
  "WAWebQueryGroupInviteProfilePicApi",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))(
        "queryGroupProfilePicParser",
        function (e) {
          if (!e.hasChild("picture"))
            throw r("err")(
              "queryGroupProfilePicParser: invalid group profile response",
            );
          var t = e.child("picture");
          return {
            id: t.attrString("id"),
            type: t.attrString("type"),
            url: t.attrString("url"),
            direct_path: t.attrString("direct_path"),
          };
        },
      );
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.code,
            a = t.groupWid,
            i = t.option,
            l = o("WAWap").wap(
              "iq",
              {
                to: o("WAWebCommsWapMd").GROUP_JID(a),
                type: "get",
                xmlns: "w:g2",
                id: o("WAWap").generateId(),
              },
              o("WAWap").wap("picture", {
                id:
                  (i == null ? void 0 : i.id) != null
                    ? o("WAWap").CUSTOM_STRING(i.id)
                    : o("WAWap").DROP_ATTR,
                type: (i == null ? void 0 : i.type) || o("WAWap").DROP_ATTR,
                query: (i == null ? void 0 : i.query) || o("WAWap").DROP_ATTR,
                invite: o("WAWap").CUSTOM_STRING(r),
              }),
            ),
            s = yield o("WADeprecatedSendIq").deprecatedSendIq(l, c);
          return s.success
            ? s.result
            : (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "queryGroupInviteLinkProfilePic failed: ",
                    ":",
                    "",
                  ])),
                s.errorCode,
                s.errorType,
              ),
              (u || (u = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  s.errorCode,
                  s.errorText,
                ),
              ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = e.adminWid,
            a = e.code,
            i = e.expiration,
            l = e.groupWid,
            d = e.option,
            m = (t = o("WAWap")).wap(
              "iq",
              {
                to: t.S_WHATSAPP_NET,
                type: "get",
                target: o("WAWebCommsWapMd").GROUP_JID(l),
                xmlns: "w:profile:picture",
                id: t.generateId(),
              },
              t.wap(
                "picture",
                {
                  id:
                    (d == null ? void 0 : d.id) != null
                      ? o("WAWap").CUSTOM_STRING(d.id)
                      : o("WAWap").DROP_ATTR,
                  type: (d == null ? void 0 : d.type) || o("WAWap").DROP_ATTR,
                  query: (d == null ? void 0 : d.query) || o("WAWap").DROP_ATTR,
                },
                o("WAWap").wap("add_request", {
                  code: o("WAWap").CUSTOM_STRING(a),
                  expiration: o("WAWap").CUSTOM_STRING(i),
                  admin: o("WAWebCommsWapMd").USER_JID(r),
                }),
              ),
            ),
            p = yield o("WADeprecatedSendIq").deprecatedSendIq(m, c);
          return p.success
            ? p.result
            : (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "queryGroupInviteMessageProfilePic failed: ",
                    ":",
                    "",
                  ])),
                p.errorCode,
                p.errorType,
              ),
              (u || (u = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  p.errorCode,
                  p.errorText,
                ),
              ));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.queryGroupInviteLinkProfilePic = d),
      (l.queryGroupInviteMessageProfilePic = p));
  },
  98,
);
