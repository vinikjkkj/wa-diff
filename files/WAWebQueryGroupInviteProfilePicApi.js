__d(
  "WAWebQueryGroupInviteProfilePicApi",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))(
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
    async function c(t) {
      var n = t.code,
        r = t.groupWid,
        a = t.option,
        i = o("WAWap").wap(
          "iq",
          {
            to: o("WAWebCommsWapMd").GROUP_JID(r),
            type: "get",
            xmlns: "w:g2",
            id: o("WAWap").generateId(),
          },
          o("WAWap").wap("picture", {
            id:
              (a == null ? void 0 : a.id) != null
                ? o("WAWap").CUSTOM_STRING(a.id)
                : o("WAWap").DROP_ATTR,
            type: (a == null ? void 0 : a.type) || o("WAWap").DROP_ATTR,
            query: (a == null ? void 0 : a.query) || o("WAWap").DROP_ATTR,
            invite: o("WAWap").CUSTOM_STRING(n),
          }),
        ),
        l = await o("WADeprecatedSendIq").deprecatedSendIq(i, u);
      return l.success
        ? l.result
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupInviteLinkProfilePic failed: ",
                ":",
                "",
              ])),
            l.errorCode,
            l.errorType,
          ),
          Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              l.errorCode,
              l.errorText,
            ),
          ));
    }
    async function d(e) {
      var t,
        n = e.adminWid,
        r = e.code,
        a = e.expiration,
        i = e.groupWid,
        l = e.option,
        c = (t = o("WAWap")).wap(
          "iq",
          {
            to: t.S_WHATSAPP_NET,
            type: "get",
            target: o("WAWebCommsWapMd").GROUP_JID(i),
            xmlns: "w:profile:picture",
            id: t.generateId(),
          },
          t.wap(
            "picture",
            {
              id:
                (l == null ? void 0 : l.id) != null
                  ? o("WAWap").CUSTOM_STRING(l.id)
                  : o("WAWap").DROP_ATTR,
              type: (l == null ? void 0 : l.type) || o("WAWap").DROP_ATTR,
              query: (l == null ? void 0 : l.query) || o("WAWap").DROP_ATTR,
            },
            o("WAWap").wap("add_request", {
              code: o("WAWap").CUSTOM_STRING(r),
              expiration: o("WAWap").CUSTOM_STRING(a),
              admin: o("WAWebCommsWapMd").USER_JID(n),
            }),
          ),
        ),
        d = await o("WADeprecatedSendIq").deprecatedSendIq(c, u);
      return d.success
        ? d.result
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupInviteMessageProfilePic failed: ",
                ":",
                "",
              ])),
            d.errorCode,
            d.errorType,
          ),
          Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              d.errorCode,
              d.errorText,
            ),
          ));
    }
    ((l.queryGroupInviteLinkProfilePic = c),
      (l.queryGroupInviteMessageProfilePic = d));
  },
  98,
);
