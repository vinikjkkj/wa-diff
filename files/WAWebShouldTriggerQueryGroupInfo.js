__d(
  "WAWebShouldTriggerQueryGroupInfo",
  ["WAWebIsAddressingModeMismatch", "WAWebSchemaGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.action,
        n = e.disableForCAGs,
        r = e.groupWid,
        a = await o("WAWebSchemaGroupMetadata")
          .getGroupMetadataTable()
          .get(r.toString());
      if (a == null) return !1;
      var i = (a == null ? void 0 : a.defaultSubgroup) === !0;
      return i && n
        ? !1
        : o("WAWebIsAddressingModeMismatch").isAddressingModeMismatch(a, t);
    }
    l.shouldTriggerQueryGroupInfo = e;
  },
  98,
);
