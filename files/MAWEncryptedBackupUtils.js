__d(
  "MAWEncryptedBackupUtils",
  [
    "FBLogger",
    "I64",
    "LSAuthorityLevel",
    "LSDict",
    "LSIntEnum",
    "LSShape",
    "LSVec",
    "ReQL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return o("ReQL")
        .firstAsync(
          o("ReQL").fromTableAscending(e.secure_encrypted_backups_client_state),
        )
        .then(function (e) {
          return c(e, t);
        });
    }
    function c(t, n) {
      var a;
      if (t == null) {
        n != null && n.addPoint("get_backup_tenancy_null_client_state_row");
        return;
      }
      var i = (a = t.backupTenancy) != null ? a : (e || (e = o("I64"))).one,
        l = t.authorityLevel;
      if (
        (n != null &&
          n.addPoint("get_backup_tenancy", {
            int: {
              authorityLevel: (e || (e = o("I64"))).to_int32(
                l != null ? l : (e || (e = o("I64"))).zero,
              ),
              backupTenancy: e.to_int32(
                i != null ? i : (e || (e = o("I64"))).zero,
              ),
            },
          }),
        i != null &&
          (e || (e = o("I64"))).equal(
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("LSAuthorityLevel").AUTHORITATIVE,
            ),
            l,
          ))
      )
        return i;
    }
    function d(e, t) {
      var n = new Set(),
        o = e.length;
      for (var a of e.entries()) {
        var i = a[0],
          l = a[1];
        (n.has(l) &&
          r("FBLogger")("wmi_eb").warn(
            "Duplicate messages returned from server for restoreType: %s, index: %s of batchSize: %s",
            t,
            i,
            o,
          ),
          n.add(l));
      }
    }
    function m(t) {
      var n = t.map(function (t) {
        var n = t.toplevelProtobuf,
          a = o("LSShape").ofRecord({
            decrypted_protobuf: n.decryptedProtobuf,
            protobuf_timestamp_ms: (e || (e = o("I64"))).of_float(
              n.protobufTimestampMS,
            ),
          }),
          i = new (r("LSDict"))();
        return (
          t.supplementalProtobufs.forEach(function (t, n) {
            i.set(
              n,
              o("LSShape").ofRecord({
                decrypted_protobuf: t.decryptedProtobuf,
                protobuf_timestamp_ms: (e || (e = o("I64"))).of_float(
                  t.protobufTimestampMS,
                ),
              }),
            );
          }),
          o("LSShape").ofRecord({
            otid: t.otid,
            supplemental_protobufs: i,
            tags: t.tags,
            toplevel_protobuf: a,
          })
        );
      });
      return r("LSVec").ofArray(n);
    }
    function p(t) {
      var n = r("LSVec").toArray(t),
        a = n.map(function (e) {
          return o("LSShape").toRecord(e);
        });
      return a.map(function (t) {
        var n = o("LSShape").toRecord(t.toplevel_protobuf),
          r = {
            decryptedProtobuf: n.decrypted_protobuf,
            protobufTimestampMS: (e || (e = o("I64"))).to_float(
              n.protobuf_timestamp_ms,
            ),
          },
          a = new Map(),
          i = t.supplemental_protobufs;
        return (
          i.forEach(function (t, n) {
            var r = o("LSShape").toRecord(t);
            a.set(n, {
              decryptedProtobuf: r.decrypted_protobuf,
              protobufTimestampMS: (e || (e = o("I64"))).to_float(
                r.protobuf_timestamp_ms,
              ),
            });
          }),
          {
            otid: t.otid,
            supplementalProtobufs: a,
            tags: t.tags,
            toplevelProtobuf: r,
          }
        );
      });
    }
    ((l.getBackupTenancy = u),
      (l.logIfDuplicateMessagesFoundInRestore = d),
      (l.convertJSTypesToLSTypesForRestoreJob = m),
      (l.convertLSTypesToJSTypesForRestoreJob = p));
  },
  98,
);
