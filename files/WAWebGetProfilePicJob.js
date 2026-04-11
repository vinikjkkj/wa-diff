__d(
  "WAWebGetProfilePicJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WASmaxProfilePictureGetRPC",
    "WAWebBackendErrors",
    "WAWebProfilePicPrivacyTokenGating",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (t.isStatus() || t.isBroadcast())
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getProfilePic failed with an invalid WID: ",
                      "",
                    ])),
                  t.toString(),
                )
                .verbose(),
              (s || (s = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  401,
                  "getProfilePic failed with an invalid WID: " + t.toString(),
                ),
              )
            );
          var a = r.commonGid,
            i = r.invite,
            l = r.photoId,
            u = r.preview,
            c = u === void 0 ? !0 : u,
            p = r.tcToken,
            _ = yield o("WASmaxProfilePictureGetRPC").sendGetRPC({
              iqTarget: o("WAWebWidToJid").widToChatJid(t),
              pictureType: c ? "preview" : "image",
              pictureId: l != null ? String(l) : void 0,
              pictureQuery: "url",
              pictureInvite: i,
              tCTokenMixinArgs: d(p),
              pictureCommonGid: m(a),
            });
          switch (_.name) {
            case "GetResponseSuccessPictureURL": {
              var f = _.value,
                g = f.pictureDirectPath,
                h = f.pictureHash,
                y = f.pictureId,
                C = f.pictureType,
                b = f.pictureUrl;
              return { tag: y, type: C, eurl: b, directPath: g, filehash: h };
            }
            case "GetResponseError": {
              var v = _.value.errorProfilePictureGetErrors.value;
              return (s || (s = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(v.code),
                  v.text,
                ),
              );
            }
            case "GetResponseSuccessAvatarURLs":
            case "GetResponseSuccessNoData":
            case "GetResponseSuccessPictureBlob":
              return (s || (s = n("Promise"))).reject(_.value.type);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t;
      return (
        o(
          "WAWebProfilePicPrivacyTokenGating",
        ).isProfilePicIQPrivacyTokenEnabled() &&
          e != null &&
          (t = {
            privacyTokenContentsMixinArgs: {
              anyElementValue: new Uint8Array(e),
            },
          }),
        t
      );
    }
    function m(e) {
      return o(
        "WAWebProfilePicPrivacyTokenGating",
      ).isProfilePicIQPrivacyTokenEnabled() && e != null
        ? o("WAJids").toGroupJid(e.toString())
        : null;
    }
    l.getProfilePic = u;
  },
  98,
);
