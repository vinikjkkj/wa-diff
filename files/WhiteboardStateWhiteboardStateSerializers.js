__d(
  "WhiteboardStateWhiteboardStateSerializers",
  ["ThriftTypes", "WhiteboardStateWhiteboardStateTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        whiteboardAction: o(
          "WhiteboardStateWhiteboardStateTypes",
        ).WhiteboardAction.cast(0),
      };
    }
    function u() {
      return { excalidraw_url: "", excalidraw_generated_by: "" };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("WhiteboardInputState"),
        n.writeFieldBegin({
          fname: "whiteboardAction",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.whiteboardAction != null)
      ) {
        var a;
        n.writeI32((a = t.whiteboardAction) != null ? a : 0);
      } else {
        var i = o("WhiteboardStateWhiteboardStateTypes").WhiteboardAction.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("WhiteboardOutputState"),
        n.writeFieldBegin({
          fname: "excalidraw_url",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.excalidraw_url != null)
      )
        n.writeString(t.excalidraw_url);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "excalidraw_generated_by",
          ftype: e.STRING,
          fid: 2,
        }),
        t.excalidraw_generated_by != null)
      )
        n.writeString(t.excalidraw_generated_by);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function m(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.whiteboardAction = o(
                  "WhiteboardStateWhiteboardStateTypes",
                ).WhiteboardAction.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.whiteboardAction === void 0 &&
          (n.whiteboardAction = o(
            "WhiteboardStateWhiteboardStateTypes",
          ).WhiteboardAction.cast(0)),
        n
      );
    }
    function p(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.excalidraw_url = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.excalidraw_generated_by = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.excalidraw_url === void 0 && (n.excalidraw_url = ""),
        n.excalidraw_generated_by === void 0 &&
          (n.excalidraw_generated_by = ""),
        n
      );
    }
    ((l.WhiteboardInputState$DefaultConstructor = s),
      (l.WhiteboardOutputState$DefaultConstructor = u),
      (l.serializeWhiteboardInputState = c),
      (l.serializeWhiteboardOutputState = d),
      (l.deserializeWhiteboardInputState = m),
      (l.deserializeWhiteboardOutputState = p));
  },
  98,
);
