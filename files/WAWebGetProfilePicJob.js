__d(
  "WAWebGetProfilePicJob",
  [
    "WAJids",
    "WALogger",
    "WASmaxProfilePictureGetRPC",
    "WAWebBackendErrors",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
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
          Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              401,
              "getProfilePic failed with an invalid WID: " + t.toString(),
            ),
          )
        );
      var r = n.commonGid,
        a = n.invite,
        i = n.photoId,
        l = n.preview,
        s = l === void 0 ? !0 : l,
        d = n.tcToken,
        m = await o("WASmaxProfilePictureGetRPC").sendGetRPC({
          iqTarget: o("WAWebWidToJid").widToChatJid(t),
          pictureType: s ? "preview" : "image",
          pictureId: i != null ? String(i) : void 0,
          pictureQuery: "url",
          pictureInvite: a,
          tCTokenMixinArgs: u(d),
          pictureCommonGid: c(r),
        });
      switch (m.name) {
        case "GetResponseSuccessPictureURL": {
          var p = m.value,
            _ = p.pictureDirectPath,
            f = p.pictureHash,
            g = p.pictureId,
            h = p.pictureType,
            y = p.pictureUrl;
          return { tag: g, type: h, eurl: y, directPath: _, filehash: f };
        }
        case "GetResponseError": {
          var C = m.value.errorProfilePictureGetErrors.value;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(C.code),
              C.text,
            ),
          );
        }
        case "GetResponseSuccessAvatarURLs":
        case "GetResponseSuccessNoData":
        case "GetResponseSuccessPictureBlob":
          return Promise.reject(m.value.type);
      }
    }
    function u(e) {
      var t;
      return (
        e != null &&
          (t = {
            privacyTokenContentsMixinArgs: {
              anyElementValue: new Uint8Array(e),
            },
          }),
        t
      );
    }
    function c(e) {
      return e != null ? o("WAJids").toGroupJid(e.toString()) : null;
    }
    l.getProfilePic = s;
  },
  98,
);
