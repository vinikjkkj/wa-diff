__d(
  "WAWebInboundMsgLidMetadata",
  ["WALogger", "WAWebApiContact", "WAWebUpdateLidMetadataJob", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e = ["displayNameLID", "shareOwnPn"],
      s;
    async function u(e) {
      var t = c(e);
      if (t.length !== 0)
        try {
          var n = await o("WAWebApiContact").bulkGetContactRecord(
              t.map(function (e) {
                var t = e.lid;
                return t;
              }),
            ),
            a = t.flatMap(function (e, t) {
              var r = e.data,
                o = e.lid,
                a = d(r, n[t]);
              return Object.keys(a).length > 0 ? [{ data: a, lid: o }] : [];
            });
          a.length > 0 &&
            (await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(a));
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] writing the contact metadata of queued messages failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("messaging")
            .sendLogs("inbound-msg-lid-metadata-write-failed");
        }
    }
    function c(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.data,
            o = e.lid;
          t.set(o, {
            data: babelHelpers.extends(
              {},
              (n = t.get(o)) == null ? void 0 : n.data,
              r,
            ),
            lid: o,
          });
        }),
        Array.from(t.values())
      );
    }
    function d(t, n) {
      var r = t.displayNameLID,
        o = t.shareOwnPn,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = babelHelpers.extends({}, a);
      return (
        o != null &&
          o !== (n == null ? void 0 : n.shareOwnPn) &&
          (i.shareOwnPn = o),
        r != null &&
          r !== (n == null ? void 0 : n.displayNameLID) &&
          (i.displayNameLID = r),
        i
      );
    }
    l.writeInboundMsgLidMetadata = u;
  },
  98,
);
