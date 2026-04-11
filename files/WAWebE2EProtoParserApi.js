__d(
  "WAWebE2EProtoParserApi",
  [
    "WABase64",
    "WALogger",
    "WAWebGroupType",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWid",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return e ===
        o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$InviteLinkGroupType.PARENT
        ? o("WAWebGroupType").GroupType.COMMUNITY
        : e ===
            o("WAWebProtobufsE2E.pb")
              .Message$ExtendedTextMessage$InviteLinkGroupType.SUB
          ? o("WAWebGroupType").GroupType.LINKED_SUBGROUP
          : e ===
              o("WAWebProtobufsE2E.pb")
                .Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT_SUB
            ? o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            : e ===
                o("WAWebProtobufsE2E.pb")
                  .Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT
              ? o("WAWebGroupType").GroupType.DEFAULT
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function _(e) {
      return e != null && !e.includes("/u/") ? e : void 0;
    }
    function f(e) {
      return e ? o("WABase64").encodeB64(e) : void 0;
    }
    function g(t, n) {
      if (h(t, n)) {
        var r = t.type;
        if (
          !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(t)
        ) {
          n.directPath == null &&
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "directPath missing from msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-unencrypted-message-missing-direct-path");
          return;
        }
        (n.directPath == null && n.fileEncSha256 == null
          ? o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "directPath and fileEncSha256 missing from msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-message-missing-direct-path-and-file-enc")
          : n.directPath == null
            ? o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "directPath missing from msg type ",
                      "",
                    ])),
                  r,
                )
                .sendLogs(r + "-message-missing-direct-path")
            : n.fileEncSha256 == null &&
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "fileEncSha256 missing from msg type ",
                      "",
                    ])),
                  r,
                )
                .sendLogs(r + "-message-missing-file-enc"),
          n.url == null &&
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "url(deprecatedMms3Url) is missing from msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-message-missing-mms3-url"),
          n.mediaKey == null &&
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "mediaKey is missing from msg type ",
                    "",
                  ])),
                r,
              )
              .sendLogs(r + "-message-missing-media-key"));
      }
    }
    function h(e, t) {
      var n;
      return !(
        (r("gkx")("26258") && Math.random() > 0.001) ||
        !e.id ||
        (((n = e.id.remote) == null ? void 0 : n.user) === "status" &&
          r("WAWebWid").isPSA(e.author) &&
          t.staticUrl == null)
      );
    }
    ((l.parseInviteGrpType = p),
      (l.decodeUrl = _),
      (l.decodeBytes = f),
      (l.validateRequiredMediaProperties = g),
      (l.shouldLogE2eProtoValidation = h));
  },
  98,
);
