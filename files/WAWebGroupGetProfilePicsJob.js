__d(
  "WAWebGroupGetProfilePicsJob",
  [
    "WALogger",
    "WASmaxGroupsGetGroupProfilePicturesRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze({ IMAGE: "image", PREVIEW: "preview" }),
      u = Object.freeze({ BLOB: "blob", URL: "url" });
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.subgroupHintId,
            a = n.type,
            i = a === void 0 ? s.PREVIEW : a,
            l = n.query,
            c = l === void 0 ? u.URL : l,
            d = {
              profilePictureTypeMixinArgs: { pictureType: i },
              profilePictureQueryMixinArgs: { pictureQuery: c },
            },
            p = e.map(function (e) {
              var t = e.groupId,
                n = e.isParentGroup,
                r = n === void 0 ? !1 : n,
                a = e.photoId,
                i = r
                  ? {
                      parentGroup: {
                        anyParentGroupJid: o("WAWebWidToJid").widToGroupJid(t),
                      },
                    }
                  : {
                      subGroup: {
                        anySubGroupJid: o("WAWebWidToJid").widToGroupJid(t),
                      },
                    };
              return babelHelpers.extends(
                {
                  parentOrSubGroupMixinGroupArgs: i,
                  profilePictureIdMixinArgs:
                    a != null ? { pictureId: a } : void 0,
                },
                d,
              );
            }),
            _ = yield o(
              "WASmaxGroupsGetGroupProfilePicturesRPC",
            ).sendGetGroupProfilePicturesRPC({
              pictureArgs: p,
              subGroupHintMixinArgs: r
                ? {
                    anyLinkedGroupsMembershipHint:
                      o("WAWebWidToJid").widToGroupJid(r),
                  }
                : void 0,
              baseGetGroupOrServerMixinGroupArgs: {
                baseGetGroup: { iqTo: o("WAWebWidToJid").widToGroupJid(t) },
              },
            });
          e: {
            var f = _;
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name ===
                "GetGroupProfilePicturesResponseSuccessGroupPictures" &&
              "value" in f
            ) {
              var g = f.value,
                h = g.picturesPicture.map(function (e) {
                  var t;
                  switch (
                    (e.parentOrSubGroupMixinGroup.name === "SubGroup"
                      ? (t = o("WAWebWidFactory").createWid(
                          e.parentOrSubGroupMixinGroup.value.subGroupJid,
                        ))
                      : (t = o("WAWebWidFactory").createWid(
                          e.parentOrSubGroupMixinGroup.value.parentGroupJid,
                        )),
                    e
                      .getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup
                      .name)
                  ) {
                    case "GetGroupProfilePicturesSuccessProfilePictureResponse": {
                      var n,
                        r,
                        a =
                          e
                            .getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup
                            .value;
                      return {
                        id: t,
                        tag: a.id,
                        eurl:
                          (n = a.profilePictureUrlOrBlobResponseMixinGroup) ==
                          null
                            ? void 0
                            : n.value.url,
                        directPath:
                          (r = a.profilePictureUrlOrBlobResponseMixinGroup) ==
                          null
                            ? void 0
                            : r.value.directPath,
                        type: a.type,
                        updatePicture: !0,
                      };
                    }
                    case "GetGroupProfilePicturesPartialProfilePictureResponse": {
                      var i,
                        l = !1;
                      return (
                        ((i =
                          e
                            .getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup
                            .value
                            .pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup) ==
                        null
                          ? void 0
                          : i.name) === "PictureNotFound" && (l = !0),
                        {
                          id: t,
                          tag: null,
                          eurl: null,
                          directPath: null,
                          type: null,
                          updatePicture: l,
                        }
                      );
                    }
                  }
                });
              return h;
            }
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name === "GetGroupProfilePicturesResponseClientError" &&
              "value" in f
            ) {
              var y = f.value,
                C = y.errorGetGroupProfilePictureClientErrors.value.code,
                b = y.errorGetGroupProfilePictureClientErrors.value.text;
              return m(C, b);
            }
            if (
              ((typeof f == "object" && f !== null) ||
                typeof f == "function") &&
              f.name === "GetGroupProfilePicturesResponseServerError" &&
              "value" in f
            ) {
              var v = f.value,
                S = v.errorServerErrors.value.code,
                R = v.errorServerErrors.value.text;
              return m(S, R);
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                f,
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, n) {
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupProfilePics failed: ",
                ":",
                "",
              ])),
            t,
            n,
          )
          .tags("non-sad")
          .sendLogs("pictures-error", { sampling: 0.01 }),
        Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(t), n),
        )
      );
    }
    ((l.ProfilePicsTypeEnum = s),
      (l.ProfilePicsQueryEnum = u),
      (l.getProfilePics = c));
  },
  98,
);
