__d(
  "WAWebGroupGetCommunityParticipantsJob",
  [
    "WALogger",
    "WASmaxGroupsGetLinkedGroupsParticipantsRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = await o(
        "WASmaxGroupsGetLinkedGroupsParticipantsRPC",
      ).sendGetLinkedGroupsParticipantsRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(t),
      });
      e: {
        var r = n;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.name === "GetLinkedGroupsParticipantsResponseSuccess" &&
          "value" in r
        ) {
          var a = r.value,
            i = a.linkedGroupsParticipantsParticipant.map(function (e) {
              return o("WAWebWidFactory").createWid(e.jid);
            });
          return i;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.name === "GetLinkedGroupsParticipantsResponseClientError" &&
          "value" in r
        ) {
          var l = r.value,
            u = l.errorGetLinkedGroupsParticipantsClientErrors.value;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getLinkedGroupsParticipants failed: ",
                  ":",
                  "",
                ])),
              u.code,
              u.text,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(u.code),
                u.text,
              ),
            )
          );
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.name === "GetLinkedGroupsParticipantsResponseServerError" &&
          "value" in r
        ) {
          var c = r.value,
            d = c.errorServerErrors.value;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getLinkedGroupsParticipants failed: ",
                  ":",
                  "",
                ])),
              d.code,
              d.text,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(d.code),
                d.text,
              ),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    l.getCommunityParticipants = u;
  },
  98,
);
