__d(
  "WAWebAddonPerfUtils",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebQplFlowWrapper",
    "WAWebSchemaMessage",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891434079, "3254"),
      s = r("qpl")._(891434096, "3255"),
      u = r("qpl")._(891428956, "3256"),
      c = n("$InternalEnum")({
        BulkUpsert: "bulk_upsert",
        BulkRemoveByParents: "bulk_remove_by_parents",
        BulkGetByParentMsgKeys: "bulk_get_by_parent_msg_keys",
        BulkGetByChatWid: "bulk_get_by_chat_wid",
        BulkGetParentMsgs: "bulk_get_parent_msgs",
      }),
      d = n("$InternalEnum").Mirrored(["Incoming", "Outgoing", "UI"]);
    function m(e) {
      return e < 10001
        ? 1e4
        : e < 30001
          ? 3e4
          : e < 500001
            ? 5e4
            : e < 1000001
              ? 1e5
              : e < 3000001
                ? 3e5
                : e < 5000001
                  ? 5e5
                  : e < 8000001
                    ? 8e5
                    : 1e6;
    }
    var p = { date: 0, values: new Map() };
    async function _(e) {
      var t = p,
        n = new Date().setHours(0, 0, 0, 0);
      if (t.date === n) {
        var r = t.values.get(e);
        if (r == null) {
          var a = m(
            await o("WAWebAddonDBTable").addonInternalDBTable.getTableSize(e),
          );
          return (t.values.set(e, a), a);
        }
        return r;
      }
      ((t.date = n), t.values.clear());
      var i = m(
        await o("WAWebAddonDBTable").addonInternalDBTable.getTableSize(e),
      );
      return (t.values.set(e, i), i);
    }
    async function f() {
      var e = "messages",
        t = p,
        n = new Date().setHours(0, 0, 0, 0);
      if (t.date === n) {
        var r = t.values.get(e);
        if (r == null) {
          var a = m(await o("WAWebSchemaMessage").getMessageTable().count());
          return (t.values.set(e, a), a);
        }
        return r;
      }
      ((t.date = n), t.values.clear());
      var i = m(await o("WAWebSchemaMessage").getMessageTable().count());
      return (t.values.set(e, i), i);
    }
    async function g(e) {
      return {
        string: {
          request_type: c.getName(e.type),
          table_mode: o("WAWebAddonConstants").AddonTableMode.getName(e.mode),
        },
        int: { request_size: e.size, table_size: await _(e.mode) },
      };
    }
    async function h(e) {
      return {
        string: { request_type: c.getName(e.type), table_mode: "messages" },
        int: { request_size: e.size, table_size: await f() },
      };
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "addon_infra_enable_perf_logging",
      );
    }
    function C(e) {
      var t = Math.random();
      return t <= e / 100;
    }
    function b(e, t) {
      switch (e) {
        case d.Incoming:
          return t === o("WAWebAddonConstants").AddonTableMode.Reaction
            ? C(3)
            : C(10);
        case d.Outgoing:
          return C(25);
        case d.UI:
          return C(1);
      }
    }
    async function v(t, n, a) {
      if (y() && b(t, n)) {
        var i = await a(),
          l;
        switch (t) {
          case d.Incoming:
            l = s;
            break;
          case d.Outgoing:
            l = u;
            break;
          case d.UI:
            l = e;
            break;
        }
        var c = o("WAWebQplFlowWrapper").QPL.markerStart(r("WANullthrows")(l), {
          annotations: i,
        });
        return {
          success: function () {
            return c.end(2);
          },
          fail: function () {
            return c.end(3);
          },
        };
      }
    }
    async function S(e, t) {
      return v(e, t.mode, function () {
        return g(t);
      });
    }
    async function R(e, t) {
      return v(e, o("WAWebAddonConstants").AddonTableMode.None, function () {
        return h(t);
      });
    }
    ((l.AnnotationRequestType = c),
      (l.AddonQplMarkerType = d),
      (l.getCachedTableSize = _),
      (l.createAddonQplMarker = S),
      (l.createMessagesQplMarker = R));
  },
  98,
);
