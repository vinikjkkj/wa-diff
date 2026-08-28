__d(
  "KeyframesSchema",
  [],
  function (t, n, r, o, a, i) {
    var e = e || {};
    ((e.keyframes = e.keyframes || {}),
      (e.keyframes.CommandType = {
        MoveTo: 0,
        LineTo: 1,
        QuadTo: 2,
        CubicTo: 3,
      }),
      (e.keyframes.CommandTypeName = {
        0: "MoveTo",
        1: "LineTo",
        2: "QuadTo",
        3: "CubicTo",
      }),
      (e.keyframes.TweenType = { Bezier: 0, Linear: 1, Hold: 2 }),
      (e.keyframes.TweenTypeName = { 0: "Bezier", 1: "Linear", 2: "Hold" }),
      (e.keyframes.VectorCompositeOrder = { FillStroke: 0, StrokeFill: 1 }),
      (e.keyframes.VectorCompositeOrderName = {
        0: "FillStroke",
        1: "StrokeFill",
      }),
      (e.keyframes.StrokeLineCap = { Butt: 0, Round: 1, Square: 2 }),
      (e.keyframes.StrokeLineCapName = { 0: "Butt", 1: "Round", 2: "Square" }),
      (e.keyframes.StrokeLineJoin = { Miter: 0, Round: 1, Bevel: 2 }),
      (e.keyframes.StrokeLineJoinName = { 0: "Miter", 1: "Round", 2: "Bevel" }),
      (e.keyframes.TrackMatteType = { None: 0, Alpha: 1, Alpha_Inverted: 2 }),
      (e.keyframes.TrackMatteTypeName = {
        0: "None",
        1: "Alpha",
        2: "Alpha_Inverted",
      }),
      (e.keyframes.GradientType = { Linear: 0, Radial: 1 }),
      (e.keyframes.GradientTypeName = { 0: "Linear", 1: "Radial" }),
      (e.keyframes.TextWeight = {
        Thin: 0,
        UltraLight: 1,
        Light: 2,
        Book: 3,
        Medium: 4,
        SemiBold: 5,
        Bold: 6,
        UltraBold: 7,
        Heavy: 8,
        UltraHeavy: 9,
      }),
      (e.keyframes.TextWeightName = {
        0: "Thin",
        1: "UltraLight",
        2: "Light",
        3: "Book",
        4: "Medium",
        5: "SemiBold",
        6: "Bold",
        7: "UltraBold",
        8: "Heavy",
        9: "UltraHeavy",
      }),
      (e.keyframes.Size = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Size.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Size.prototype.width = function () {
        return this.bb.readFloat32(this.bb_pos);
      }),
      (e.keyframes.Size.prototype.mutate_width = function (e) {
        var t = this.bb.__offset(this.bb_pos, 0);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Size.prototype.height = function () {
        return this.bb.readFloat32(this.bb_pos + 4);
      }),
      (e.keyframes.Size.prototype.mutate_height = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Size.createSize = function (e, t, n) {
        return (e.prep(4, 8), e.writeFloat32(n), e.writeFloat32(t), e.offset());
      }),
      (e.keyframes.Point = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Point.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Point.getRootAsPoint = function (t, n) {
        return (n || new e.keyframes.Point()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Point.prototype.x = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Point.prototype.mutate_x = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Point.prototype.y = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Point.prototype.mutate_y = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Point.startPoint = function (e) {
        e.startObject(2);
      }),
      (e.keyframes.Point.addX = function (e, t) {
        e.addFieldFloat32(0, t, 0);
      }),
      (e.keyframes.Point.addY = function (e, t) {
        e.addFieldFloat32(1, t, 0);
      }),
      (e.keyframes.Point.endPoint = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Point.createPoint = function (t, n, r) {
        return (
          e.keyframes.Point.startPoint(t),
          e.keyframes.Point.addX(t, n),
          e.keyframes.Point.addY(t, r),
          e.keyframes.Point.endPoint(t)
        );
      }),
      (e.keyframes.Color = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Color.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Color.getRootAsColor = function (t, n) {
        return (n || new e.keyframes.Color()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Color.prototype.red = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readUint8(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Color.prototype.mutate_red = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeUint8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Color.prototype.green = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readUint8(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Color.prototype.mutate_green = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t === 0 ? !1 : (this.bb.writeUint8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Color.prototype.blue = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.readUint8(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Color.prototype.mutate_blue = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t === 0 ? !1 : (this.bb.writeUint8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Color.prototype.alpha = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readUint8(this.bb_pos + e) : 255;
      }),
      (e.keyframes.Color.prototype.mutate_alpha = function (e) {
        var t = this.bb.__offset(this.bb_pos, 10);
        return t === 0 ? !1 : (this.bb.writeUint8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Color.startColor = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.Color.addRed = function (e, t) {
        e.addFieldInt8(0, t, 0);
      }),
      (e.keyframes.Color.addGreen = function (e, t) {
        e.addFieldInt8(1, t, 0);
      }),
      (e.keyframes.Color.addBlue = function (e, t) {
        e.addFieldInt8(2, t, 0);
      }),
      (e.keyframes.Color.addAlpha = function (e, t) {
        e.addFieldInt8(3, t, 255);
      }),
      (e.keyframes.Color.endColor = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Color.createColor = function (t, n, r, o, a) {
        return (
          e.keyframes.Color.startColor(t),
          e.keyframes.Color.addRed(t, n),
          e.keyframes.Color.addGreen(t, r),
          e.keyframes.Color.addBlue(t, o),
          e.keyframes.Color.addAlpha(t, a),
          e.keyframes.Color.endColor(t)
        );
      }),
      (e.keyframes.ColorArray = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ColorArray.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ColorArray.getRootAsColorArray = function (t, n) {
        return (n || new e.keyframes.ColorArray()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ColorArray.prototype.colors = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Color()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArray.prototype.colorsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArray.startColorArray = function (e) {
        e.startObject(1);
      }),
      (e.keyframes.ColorArray.addColors = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ColorArray.createColorsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArray.startColorsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArray.endColorArray = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ColorArray.createColorArray = function (t, n) {
        return (
          e.keyframes.ColorArray.startColorArray(t),
          e.keyframes.ColorArray.addColors(t, n),
          e.keyframes.ColorArray.endColorArray(t)
        );
      }),
      (e.keyframes.Command = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Command.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Command.getRootAsCommand = function (t, n) {
        return (n || new e.keyframes.Command()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Command.prototype.type = function () {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.CommandType.MoveTo;
      }),
      (e.keyframes.Command.prototype.mutate_type = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Command.prototype.point = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Command.prototype.control1 = function (t) {
        var n = this.bb.__offset(this.bb_pos, 8);
        return n
          ? (t || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Command.prototype.control2 = function (t) {
        var n = this.bb.__offset(this.bb_pos, 10);
        return n
          ? (t || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Command.startCommand = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.Command.addType = function (t, n) {
        t.addFieldInt8(0, n, e.keyframes.CommandType.MoveTo);
      }),
      (e.keyframes.Command.addPoint = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Command.addControl1 = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Command.addControl2 = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.Command.endCommand = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Command.createCommand = function (t, n, r, o, a) {
        return (
          e.keyframes.Command.startCommand(t),
          e.keyframes.Command.addType(t, n),
          e.keyframes.Command.addPoint(t, r),
          e.keyframes.Command.addControl1(t, o),
          e.keyframes.Command.addControl2(t, a),
          e.keyframes.Command.endCommand(t)
        );
      }),
      (e.keyframes.Path = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Path.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Path.getRootAsPath = function (t, n) {
        return (n || new e.keyframes.Path()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Path.prototype.commands = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Command()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Path.prototype.commandsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Path.startPath = function (e) {
        e.startObject(1);
      }),
      (e.keyframes.Path.addCommands = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Path.createCommandsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Path.startCommandsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Path.endPath = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Path.createPath = function (t, n) {
        return (
          e.keyframes.Path.startPath(t),
          e.keyframes.Path.addCommands(t, n),
          e.keyframes.Path.endPath(t)
        );
      }),
      (e.keyframes.Tween = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Tween.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Tween.getRootAsTween = function (t, n) {
        return (n || new e.keyframes.Tween()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Tween.prototype.type = function () {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.TweenType.Bezier;
      }),
      (e.keyframes.Tween.prototype.mutate_type = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Tween.prototype.control1 = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Tween.prototype.control2 = function (t) {
        var n = this.bb.__offset(this.bb_pos, 8);
        return n
          ? (t || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Tween.startTween = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Tween.addType = function (t, n) {
        t.addFieldInt8(0, n, e.keyframes.TweenType.Bezier);
      }),
      (e.keyframes.Tween.addControl1 = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Tween.addControl2 = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Tween.endTween = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Tween.createTween = function (t, n, r, o) {
        return (
          e.keyframes.Tween.startTween(t),
          e.keyframes.Tween.addType(t, n),
          e.keyframes.Tween.addControl1(t, r),
          e.keyframes.Tween.addControl2(t, o),
          e.keyframes.Tween.endTween(t)
        );
      }),
      (e.keyframes.ScalarAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ScalarAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ScalarAnimation.getRootAsScalarAnimation = function (t, n) {
        return (n || new e.keyframes.ScalarAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ScalarAnimation.prototype.value = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.mutate_value = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.ScalarAnimation.prototype.values = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.valuesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.startScalarAnimation = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.ScalarAnimation.addValue = function (e, t) {
        e.addFieldFloat32(0, t, 0);
      }),
      (e.keyframes.ScalarAnimation.addValues = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ScalarAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ScalarAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarAnimation.addTweens = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.ScalarAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarAnimation.endScalarAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ScalarAnimation.createScalarAnimation = function (
        t,
        n,
        r,
        o,
        a,
      ) {
        return (
          e.keyframes.ScalarAnimation.startScalarAnimation(t),
          e.keyframes.ScalarAnimation.addValue(t, n),
          e.keyframes.ScalarAnimation.addValues(t, r),
          e.keyframes.ScalarAnimation.addKeyframes(t, o),
          e.keyframes.ScalarAnimation.addTweens(t, a),
          e.keyframes.ScalarAnimation.endScalarAnimation(t)
        );
      }),
      (e.keyframes.ScalarArray = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ScalarArray.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ScalarArray.getRootAsScalarArray = function (t, n) {
        return (n || new e.keyframes.ScalarArray()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ScalarArray.prototype.values = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarArray.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarArray.prototype.valuesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarArray.startScalarArray = function (e) {
        e.startObject(1);
      }),
      (e.keyframes.ScalarArray.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ScalarArray.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArray.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArray.endScalarArray = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ScalarArray.createScalarArray = function (t, n) {
        return (
          e.keyframes.ScalarArray.startScalarArray(t),
          e.keyframes.ScalarArray.addValues(t, n),
          e.keyframes.ScalarArray.endScalarArray(t)
        );
      }),
      (e.keyframes.ScalarArrayAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ScalarArrayAnimation.getRootAsScalarArrayAnimation =
        function (t, n) {
          return (n || new e.keyframes.ScalarArrayAnimation()).__init(
            t.readInt32(t.position()) + t.position(),
            t,
          );
        }),
      (e.keyframes.ScalarArrayAnimation.prototype.value = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.ScalarArray()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.ScalarArray()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.keyframesLength =
        function () {
          var e = this.bb.__offset(this.bb_pos, 8);
          return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
        }),
      (e.keyframes.ScalarArrayAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarArrayAnimation.startScalarArrayAnimation = function (
        e,
      ) {
        e.startObject(4);
      }),
      (e.keyframes.ScalarArrayAnimation.addValue = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.addValues = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArrayAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArrayAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.createKeyframesVector = function (
        e,
        t,
      ) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArrayAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArrayAnimation.addTweens = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArrayAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArrayAnimation.endScalarArrayAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ScalarArrayAnimation.createScalarArrayAnimation = function (
        t,
        n,
        r,
        o,
        a,
      ) {
        return (
          e.keyframes.ScalarArrayAnimation.startScalarArrayAnimation(t),
          e.keyframes.ScalarArrayAnimation.addValue(t, n),
          e.keyframes.ScalarArrayAnimation.addValues(t, r),
          e.keyframes.ScalarArrayAnimation.addKeyframes(t, o),
          e.keyframes.ScalarArrayAnimation.addTweens(t, a),
          e.keyframes.ScalarArrayAnimation.endScalarArrayAnimation(t)
        );
      }),
      (e.keyframes.PointAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.PointAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.PointAnimation.getRootAsPointAnimation = function (t, n) {
        return (n || new e.keyframes.PointAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.PointAnimation.prototype.value = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.Point()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PointAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.PointAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PointAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PointAnimation.startPointAnimation = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.PointAnimation.addValue = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.PointAnimation.addValues = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.PointAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PointAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PointAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.PointAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PointAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PointAnimation.addTweens = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.PointAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PointAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PointAnimation.endPointAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.PointAnimation.createPointAnimation = function (
        t,
        n,
        r,
        o,
        a,
      ) {
        return (
          e.keyframes.PointAnimation.startPointAnimation(t),
          e.keyframes.PointAnimation.addValue(t, n),
          e.keyframes.PointAnimation.addValues(t, r),
          e.keyframes.PointAnimation.addKeyframes(t, o),
          e.keyframes.PointAnimation.addTweens(t, a),
          e.keyframes.PointAnimation.endPointAnimation(t)
        );
      }),
      (e.keyframes.ColorAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ColorAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ColorAnimation.getRootAsColorAnimation = function (t, n) {
        return (n || new e.keyframes.ColorAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ColorAnimation.prototype.value = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Color()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.Color()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ColorAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorAnimation.startColorAnimation = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.ColorAnimation.addValue = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ColorAnimation.addValues = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ColorAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ColorAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorAnimation.addTweens = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.ColorAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorAnimation.endColorAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ColorAnimation.createColorAnimation = function (
        t,
        n,
        r,
        o,
        a,
      ) {
        return (
          e.keyframes.ColorAnimation.startColorAnimation(t),
          e.keyframes.ColorAnimation.addValue(t, n),
          e.keyframes.ColorAnimation.addValues(t, r),
          e.keyframes.ColorAnimation.addKeyframes(t, o),
          e.keyframes.ColorAnimation.addTweens(t, a),
          e.keyframes.ColorAnimation.endColorAnimation(t)
        );
      }),
      (e.keyframes.ColorArrayAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ColorArrayAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ColorArrayAnimation.getRootAsColorArrayAnimation = function (
        t,
        n,
      ) {
        return (n || new e.keyframes.ColorArrayAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ColorArrayAnimation.prototype.value = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.ColorArray()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.ColorArray()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArrayAnimation.startColorArrayAnimation = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.ColorArrayAnimation.addValue = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.addValues = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArrayAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArrayAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArrayAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArrayAnimation.addTweens = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArrayAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArrayAnimation.endColorArrayAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ColorArrayAnimation.createColorArrayAnimation = function (
        t,
        n,
        r,
        o,
        a,
      ) {
        return (
          e.keyframes.ColorArrayAnimation.startColorArrayAnimation(t),
          e.keyframes.ColorArrayAnimation.addValue(t, n),
          e.keyframes.ColorArrayAnimation.addValues(t, r),
          e.keyframes.ColorArrayAnimation.addKeyframes(t, o),
          e.keyframes.ColorArrayAnimation.addTweens(t, a),
          e.keyframes.ColorArrayAnimation.endColorArrayAnimation(t)
        );
      }),
      (e.keyframes.PathAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.PathAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.PathAnimation.getRootAsPathAnimation = function (t, n) {
        return (n || new e.keyframes.PathAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.PathAnimation.prototype.value = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Path()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.Path()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PathAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.PathAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PathAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PathAnimation.startPathAnimation = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.PathAnimation.addValue = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.PathAnimation.addValues = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.PathAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PathAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PathAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.PathAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PathAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PathAnimation.addTweens = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.PathAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PathAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PathAnimation.endPathAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.PathAnimation.createPathAnimation = function (
        t,
        n,
        r,
        o,
        a,
      ) {
        return (
          e.keyframes.PathAnimation.startPathAnimation(t),
          e.keyframes.PathAnimation.addValue(t, n),
          e.keyframes.PathAnimation.addValues(t, r),
          e.keyframes.PathAnimation.addKeyframes(t, o),
          e.keyframes.PathAnimation.addTweens(t, a),
          e.keyframes.PathAnimation.endPathAnimation(t)
        );
      }),
      (e.keyframes.Gradient = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Gradient.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Gradient.getRootAsGradient = function (t, n) {
        return (n || new e.keyframes.Gradient()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Gradient.prototype.colorStart = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.ColorAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.colorEnd = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.ColorAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.rampStart = function (t) {
        var n = this.bb.__offset(this.bb_pos, 8);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.rampEnd = function (t) {
        var n = this.bb.__offset(this.bb_pos, 10);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.type = function () {
        var t = this.bb.__offset(this.bb_pos, 12);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.GradientType.Linear;
      }),
      (e.keyframes.Gradient.prototype.mutate_type = function (e) {
        var t = this.bb.__offset(this.bb_pos, 12);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Gradient.prototype.colors = function (t) {
        var n = this.bb.__offset(this.bb_pos, 14);
        return n
          ? (t || new e.keyframes.ColorArrayAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.positions = function (t) {
        var n = this.bb.__offset(this.bb_pos, 16);
        return n
          ? (t || new e.keyframes.ScalarArrayAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.highlightLength = function (t) {
        var n = this.bb.__offset(this.bb_pos, 18);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.highlightAngle = function (t) {
        var n = this.bb.__offset(this.bb_pos, 20);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.startGradient = function (e) {
        e.startObject(9);
      }),
      (e.keyframes.Gradient.addColorStart = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Gradient.addColorEnd = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Gradient.addRampStart = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Gradient.addRampEnd = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.Gradient.addType = function (t, n) {
        t.addFieldInt8(4, n, e.keyframes.GradientType.Linear);
      }),
      (e.keyframes.Gradient.addColors = function (e, t) {
        e.addFieldOffset(5, t, 0);
      }),
      (e.keyframes.Gradient.addPositions = function (e, t) {
        e.addFieldOffset(6, t, 0);
      }),
      (e.keyframes.Gradient.addHighlightLength = function (e, t) {
        e.addFieldOffset(7, t, 0);
      }),
      (e.keyframes.Gradient.addHighlightAngle = function (e, t) {
        e.addFieldOffset(8, t, 0);
      }),
      (e.keyframes.Gradient.endGradient = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Gradient.createGradient = function (
        t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
      ) {
        return (
          e.keyframes.Gradient.startGradient(t),
          e.keyframes.Gradient.addColorStart(t, n),
          e.keyframes.Gradient.addColorEnd(t, r),
          e.keyframes.Gradient.addRampStart(t, o),
          e.keyframes.Gradient.addRampEnd(t, a),
          e.keyframes.Gradient.addType(t, i),
          e.keyframes.Gradient.addColors(t, l),
          e.keyframes.Gradient.addPositions(t, s),
          e.keyframes.Gradient.addHighlightLength(t, u),
          e.keyframes.Gradient.addHighlightAngle(t, c),
          e.keyframes.Gradient.endGradient(t)
        );
      }),
      (e.keyframes.Bitmap = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Bitmap.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Bitmap.getRootAsBitmap = function (t, n) {
        return (n || new e.keyframes.Bitmap()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Bitmap.prototype.size = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Bitmap.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Bitmap.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Bitmap.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Bitmap.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Bitmap.startBitmap = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Bitmap.addSize = function (e, t) {
        e.addFieldStruct(0, t, 0);
      }),
      (e.keyframes.Bitmap.addContent = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Bitmap.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Bitmap.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Bitmap.addName = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Bitmap.endBitmap = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Bitmap.createBitmap = function (t, n, r, o) {
        return (
          e.keyframes.Bitmap.startBitmap(t),
          e.keyframes.Bitmap.addSize(t, n),
          e.keyframes.Bitmap.addContent(t, r),
          e.keyframes.Bitmap.addName(t, o),
          e.keyframes.Bitmap.endBitmap(t)
        );
      }),
      (e.keyframes.Video = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Video.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Video.getRootAsVideo = function (t, n) {
        return (n || new e.keyframes.Video()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Video.prototype.size = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Video.prototype.length = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Video.prototype.mutate_length = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Video.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Video.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Video.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Video.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Video.startVideo = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.Video.addSize = function (e, t) {
        e.addFieldStruct(0, t, 0);
      }),
      (e.keyframes.Video.addLength = function (e, t) {
        e.addFieldInt32(1, t, 0);
      }),
      (e.keyframes.Video.addContent = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Video.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Video.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Video.addName = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.Video.endVideo = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Video.createVideo = function (t, n, r, o, a) {
        return (
          e.keyframes.Video.startVideo(t),
          e.keyframes.Video.addSize(t, n),
          e.keyframes.Video.addLength(t, r),
          e.keyframes.Video.addContent(t, o),
          e.keyframes.Video.addName(t, a),
          e.keyframes.Video.endVideo(t)
        );
      }),
      (e.keyframes.Plugin = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Plugin.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Plugin.getRootAsPlugin = function (t, n) {
        return (n || new e.keyframes.Plugin()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Plugin.prototype.index = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Plugin.prototype.mutate_index = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Plugin.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Plugin.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Plugin.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Plugin.prototype.optional = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
      }),
      (e.keyframes.Plugin.prototype.mutate_optional = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Plugin.startPlugin = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Plugin.addIndex = function (e, t) {
        e.addFieldInt32(0, t, 0);
      }),
      (e.keyframes.Plugin.addContent = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Plugin.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Plugin.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Plugin.addOptional = function (e, t) {
        e.addFieldInt8(2, +t, 0);
      }),
      (e.keyframes.Plugin.endPlugin = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Plugin.createPlugin = function (t, n, r, o) {
        return (
          e.keyframes.Plugin.startPlugin(t),
          e.keyframes.Plugin.addIndex(t, n),
          e.keyframes.Plugin.addContent(t, r),
          e.keyframes.Plugin.addOptional(t, o),
          e.keyframes.Plugin.endPlugin(t)
        );
      }),
      (e.keyframes.ProgressMarker = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ProgressMarker.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ProgressMarker.getRootAsProgressMarker = function (t, n) {
        return (n || new e.keyframes.ProgressMarker()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ProgressMarker.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.ProgressMarker.prototype.startProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ProgressMarker.prototype.mutate_start_progress = function (
        e,
      ) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.ProgressMarker.prototype.endProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ProgressMarker.prototype.mutate_end_progress = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.ProgressMarker.startProgressMarker = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.ProgressMarker.addName = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ProgressMarker.addStartProgress = function (e, t) {
        e.addFieldFloat32(1, t, 0);
      }),
      (e.keyframes.ProgressMarker.addEndProgress = function (e, t) {
        e.addFieldFloat32(2, t, 0);
      }),
      (e.keyframes.ProgressMarker.endProgressMarker = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ProgressMarker.createProgressMarker = function (t, n, r, o) {
        return (
          e.keyframes.ProgressMarker.startProgressMarker(t),
          e.keyframes.ProgressMarker.addName(t, n),
          e.keyframes.ProgressMarker.addStartProgress(t, r),
          e.keyframes.ProgressMarker.addEndProgress(t, o),
          e.keyframes.ProgressMarker.endProgressMarker(t)
        );
      }),
      (e.keyframes.Layer = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Layer.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Layer.getRootAsLayer = function (t, n) {
        return (n || new e.keyframes.Layer()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Layer.prototype.id = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_id = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.sublayers = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.Layer()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.sublayersLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.fromProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_from_progress = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.toProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 1;
      }),
      (e.keyframes.Layer.prototype.mutate_to_progress = function (e) {
        var t = this.bb.__offset(this.bb_pos, 10);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.anchorPoint = function (t) {
        var n = this.bb.__offset(this.bb_pos, 12);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.xPosition = function (t) {
        var n = this.bb.__offset(this.bb_pos, 14);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.yPosition = function (t) {
        var n = this.bb.__offset(this.bb_pos, 16);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.rotation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 18);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.scale = function (t) {
        var n = this.bb.__offset(this.bb_pos, 20);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.path = function (t) {
        var n = this.bb.__offset(this.bb_pos, 22);
        return n
          ? (t || new e.keyframes.PathAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.opacity = function (t) {
        var n = this.bb.__offset(this.bb_pos, 24);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.fillColor = function (t) {
        var n = this.bb.__offset(this.bb_pos, 26);
        return n
          ? (t || new e.keyframes.ColorAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeColor = function (t) {
        var n = this.bb.__offset(this.bb_pos, 28);
        return n
          ? (t || new e.keyframes.ColorAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeWidth = function (t) {
        var n = this.bb.__offset(this.bb_pos, 30);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeLineCap = function () {
        var t = this.bb.__offset(this.bb_pos, 32);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.StrokeLineCap.Butt;
      }),
      (e.keyframes.Layer.prototype.mutate_stroke_line_cap = function (e) {
        var t = this.bb.__offset(this.bb_pos, 32);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.gradient = function (t) {
        var n = this.bb.__offset(this.bb_pos, 34);
        return n
          ? (t || new e.keyframes.Gradient()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeLineJoin = function () {
        var t = this.bb.__offset(this.bb_pos, 36);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.StrokeLineJoin.Miter;
      }),
      (e.keyframes.Layer.prototype.mutate_stroke_line_join = function (e) {
        var t = this.bb.__offset(this.bb_pos, 36);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.miterLimit = function (t) {
        var n = this.bb.__offset(this.bb_pos, 38);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.bitmapIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 40);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.mutate_bitmap_index = function (e) {
        var t = this.bb.__offset(this.bb_pos, 40);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.subdocumentIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 42);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.mutate_subdocument_index = function (e) {
        var t = this.bb.__offset(this.bb_pos, 42);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.plugins = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 44);
        return r
          ? (n || new e.keyframes.Plugin()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.pluginsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 44);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.progressOffset = function () {
        var e = this.bb.__offset(this.bb_pos, 46);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_progress_offset = function (e) {
        var t = this.bb.__offset(this.bb_pos, 46);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.clippingPath = function (t) {
        var n = this.bb.__offset(this.bb_pos, 48);
        return n
          ? (t || new e.keyframes.PathAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.position = function (t) {
        var n = this.bb.__offset(this.bb_pos, 50);
        return n
          ? (t || new e.keyframes.PathAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.isTrackMatte = function () {
        var e = this.bb.__offset(this.bb_pos, 52);
        return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
      }),
      (e.keyframes.Layer.prototype.mutate_is_track_matte = function (e) {
        var t = this.bb.__offset(this.bb_pos, 52);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.trackMatteType = function () {
        var t = this.bb.__offset(this.bb_pos, 54);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.TrackMatteType.None;
      }),
      (e.keyframes.Layer.prototype.mutate_track_matte_type = function (e) {
        var t = this.bb.__offset(this.bb_pos, 54);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.vectorCompositeOrder = function () {
        var t = this.bb.__offset(this.bb_pos, 56);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.VectorCompositeOrder.FillStroke;
      }),
      (e.keyframes.Layer.prototype.mutate_vector_composite_order = function (
        e,
      ) {
        var t = this.bb.__offset(this.bb_pos, 56);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.text = function (e) {
        var t = this.bb.__offset(this.bb_pos, 58);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Layer.prototype.textTypeface = function (e) {
        var t = this.bb.__offset(this.bb_pos, 60);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Layer.prototype.textSize = function () {
        var e = this.bb.__offset(this.bb_pos, 62);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_textSize = function (e) {
        var t = this.bb.__offset(this.bb_pos, 62);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textColor = function (t) {
        var n = this.bb.__offset(this.bb_pos, 64);
        return n
          ? (t || new e.keyframes.Color()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.textAlign = function () {
        var e = this.bb.__offset(this.bb_pos, 66);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_textAlign = function (e) {
        var t = this.bb.__offset(this.bb_pos, 66);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textVAlign = function () {
        var e = this.bb.__offset(this.bb_pos, 68);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_textVAlign = function (e) {
        var t = this.bb.__offset(this.bb_pos, 68);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textTracking = function () {
        var e = this.bb.__offset(this.bb_pos, 70);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_textTracking = function (e) {
        var t = this.bb.__offset(this.bb_pos, 70);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textLeading = function () {
        var e = this.bb.__offset(this.bb_pos, 72);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.mutate_textLeading = function (e) {
        var t = this.bb.__offset(this.bb_pos, 72);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textItalic = function () {
        var e = this.bb.__offset(this.bb_pos, 74);
        return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
      }),
      (e.keyframes.Layer.prototype.mutate_textItalic = function (e) {
        var t = this.bb.__offset(this.bb_pos, 74);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textWeight = function () {
        var t = this.bb.__offset(this.bb_pos, 76);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.TextWeight.Thin;
      }),
      (e.keyframes.Layer.prototype.mutate_textWeight = function (e) {
        var t = this.bb.__offset(this.bb_pos, 76);
        return t === 0 ? !1 : (this.bb.writeInt8(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.prototype.textBoxSize = function (t) {
        var n = this.bb.__offset(this.bb_pos, 78);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.prototype.videoLevels = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 80);
        return r
          ? (n || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.videoLevelsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 80);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.videoIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 82);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.mutate_video_index = function (e) {
        var t = this.bb.__offset(this.bb_pos, 82);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Layer.startLayer = function (e) {
        e.startObject(40);
      }),
      (e.keyframes.Layer.addId = function (e, t) {
        e.addFieldInt32(0, t, 0);
      }),
      (e.keyframes.Layer.addSublayers = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Layer.createSublayersVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startSublayersVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addFromProgress = function (e, t) {
        e.addFieldFloat32(2, t, 0);
      }),
      (e.keyframes.Layer.addToProgress = function (e, t) {
        e.addFieldFloat32(3, t, 1);
      }),
      (e.keyframes.Layer.addAnchorPoint = function (e, t) {
        e.addFieldOffset(4, t, 0);
      }),
      (e.keyframes.Layer.addXPosition = function (e, t) {
        e.addFieldOffset(5, t, 0);
      }),
      (e.keyframes.Layer.addYPosition = function (e, t) {
        e.addFieldOffset(6, t, 0);
      }),
      (e.keyframes.Layer.addRotation = function (e, t) {
        e.addFieldOffset(7, t, 0);
      }),
      (e.keyframes.Layer.addScale = function (e, t) {
        e.addFieldOffset(8, t, 0);
      }),
      (e.keyframes.Layer.addPath = function (e, t) {
        e.addFieldOffset(9, t, 0);
      }),
      (e.keyframes.Layer.addOpacity = function (e, t) {
        e.addFieldOffset(10, t, 0);
      }),
      (e.keyframes.Layer.addFillColor = function (e, t) {
        e.addFieldOffset(11, t, 0);
      }),
      (e.keyframes.Layer.addStrokeColor = function (e, t) {
        e.addFieldOffset(12, t, 0);
      }),
      (e.keyframes.Layer.addStrokeWidth = function (e, t) {
        e.addFieldOffset(13, t, 0);
      }),
      (e.keyframes.Layer.addStrokeLineCap = function (t, n) {
        t.addFieldInt8(14, n, e.keyframes.StrokeLineCap.Butt);
      }),
      (e.keyframes.Layer.addGradient = function (e, t) {
        e.addFieldOffset(15, t, 0);
      }),
      (e.keyframes.Layer.addStrokeLineJoin = function (t, n) {
        t.addFieldInt8(16, n, e.keyframes.StrokeLineJoin.Miter);
      }),
      (e.keyframes.Layer.addMiterLimit = function (e, t) {
        e.addFieldOffset(17, t, 0);
      }),
      (e.keyframes.Layer.addBitmapIndex = function (e, t) {
        e.addFieldInt32(18, t, -1);
      }),
      (e.keyframes.Layer.addSubdocumentIndex = function (e, t) {
        e.addFieldInt32(19, t, -1);
      }),
      (e.keyframes.Layer.addPlugins = function (e, t) {
        e.addFieldOffset(20, t, 0);
      }),
      (e.keyframes.Layer.createPluginsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startPluginsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addProgressOffset = function (e, t) {
        e.addFieldFloat32(21, t, 0);
      }),
      (e.keyframes.Layer.addClippingPath = function (e, t) {
        e.addFieldOffset(22, t, 0);
      }),
      (e.keyframes.Layer.addPosition = function (e, t) {
        e.addFieldOffset(23, t, 0);
      }),
      (e.keyframes.Layer.addIsTrackMatte = function (e, t) {
        e.addFieldInt8(24, +t, 0);
      }),
      (e.keyframes.Layer.addTrackMatteType = function (t, n) {
        t.addFieldInt8(25, n, e.keyframes.TrackMatteType.None);
      }),
      (e.keyframes.Layer.addVectorCompositeOrder = function (t, n) {
        t.addFieldInt8(26, n, e.keyframes.VectorCompositeOrder.FillStroke);
      }),
      (e.keyframes.Layer.addText = function (e, t) {
        e.addFieldOffset(27, t, 0);
      }),
      (e.keyframes.Layer.addTextTypeface = function (e, t) {
        e.addFieldOffset(28, t, 0);
      }),
      (e.keyframes.Layer.addTextSize = function (e, t) {
        e.addFieldFloat32(29, t, 0);
      }),
      (e.keyframes.Layer.addTextColor = function (e, t) {
        e.addFieldOffset(30, t, 0);
      }),
      (e.keyframes.Layer.addTextAlign = function (e, t) {
        e.addFieldFloat32(31, t, 0);
      }),
      (e.keyframes.Layer.addTextVAlign = function (e, t) {
        e.addFieldFloat32(32, t, 0);
      }),
      (e.keyframes.Layer.addTextTracking = function (e, t) {
        e.addFieldFloat32(33, t, 0);
      }),
      (e.keyframes.Layer.addTextLeading = function (e, t) {
        e.addFieldFloat32(34, t, 0);
      }),
      (e.keyframes.Layer.addTextItalic = function (e, t) {
        e.addFieldInt8(35, +t, 0);
      }),
      (e.keyframes.Layer.addTextWeight = function (t, n) {
        t.addFieldInt8(36, n, e.keyframes.TextWeight.Thin);
      }),
      (e.keyframes.Layer.addTextBoxSize = function (e, t) {
        e.addFieldStruct(37, t, 0);
      }),
      (e.keyframes.Layer.addVideoLevels = function (e, t) {
        e.addFieldOffset(38, t, 0);
      }),
      (e.keyframes.Layer.createVideoLevelsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startVideoLevelsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addVideoIndex = function (e, t) {
        e.addFieldInt32(39, t, -1);
      }),
      (e.keyframes.Layer.endLayer = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Layer.createLayer = function (
        t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
      ) {
        return (
          e.keyframes.Layer.startLayer(t),
          e.keyframes.Layer.addId(t, n),
          e.keyframes.Layer.addSublayers(t, r),
          e.keyframes.Layer.addFromProgress(t, o),
          e.keyframes.Layer.addToProgress(t, a),
          e.keyframes.Layer.addAnchorPoint(t, i),
          e.keyframes.Layer.addXPosition(t, l),
          e.keyframes.Layer.addYPosition(t, s),
          e.keyframes.Layer.addRotation(t, u),
          e.keyframes.Layer.addScale(t, c),
          e.keyframes.Layer.addPath(t, d),
          e.keyframes.Layer.addOpacity(t, m),
          e.keyframes.Layer.addFillColor(t, p),
          e.keyframes.Layer.addStrokeColor(t, _),
          e.keyframes.Layer.addStrokeWidth(t, f),
          e.keyframes.Layer.addStrokeLineCap(t, g),
          e.keyframes.Layer.addGradient(t, h),
          e.keyframes.Layer.addStrokeLineJoin(t, y),
          e.keyframes.Layer.addMiterLimit(t, C),
          e.keyframes.Layer.addBitmapIndex(t, b),
          e.keyframes.Layer.addSubdocumentIndex(t, v),
          e.keyframes.Layer.addPlugins(t, S),
          e.keyframes.Layer.addProgressOffset(t, R),
          e.keyframes.Layer.addClippingPath(t, L),
          e.keyframes.Layer.addPosition(t, E),
          e.keyframes.Layer.addIsTrackMatte(t, k),
          e.keyframes.Layer.addTrackMatteType(t, I),
          e.keyframes.Layer.addVectorCompositeOrder(t, T),
          e.keyframes.Layer.addText(t, D),
          e.keyframes.Layer.addTextTypeface(t, x),
          e.keyframes.Layer.addTextSize(t, $),
          e.keyframes.Layer.addTextColor(t, P),
          e.keyframes.Layer.addTextAlign(t, N),
          e.keyframes.Layer.addTextVAlign(t, M),
          e.keyframes.Layer.addTextTracking(t, w),
          e.keyframes.Layer.addTextLeading(t, A),
          e.keyframes.Layer.addTextItalic(t, F),
          e.keyframes.Layer.addTextWeight(t, O),
          e.keyframes.Layer.addTextBoxSize(t, B),
          e.keyframes.Layer.addVideoLevels(t, W),
          e.keyframes.Layer.addVideoIndex(t, q),
          e.keyframes.Layer.endLayer(t)
        );
      }),
      (e.keyframes.Document = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Document.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Document.getRootAsDocument = function (t, n) {
        return (n || new e.keyframes.Document()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Document.bufferHasIdentifier = function (e) {
        return e.__has_identifier("KEYF");
      }),
      (e.keyframes.Document.prototype.size = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Document.prototype.frameRate = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.mutate_frame_rate = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Document.prototype.duration = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.mutate_duration = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t === 0 ? !1 : (this.bb.writeFloat32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Document.prototype.version = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.mutate_version = function (e) {
        var t = this.bb.__offset(this.bb_pos, 10);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Document.prototype.rootLayer = function (t) {
        var n = this.bb.__offset(this.bb_pos, 12);
        return n
          ? (t || new e.keyframes.Layer()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.bitmaps = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 14);
        return r
          ? (n || new e.keyframes.Bitmap()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.bitmapsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 14);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.subdocuments = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 16);
        return r
          ? (n || new e.keyframes.Document()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.subdocumentsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 16);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.plugins = function (e, t) {
        var n = this.bb.__offset(this.bb_pos, 18);
        return n
          ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t)
          : null;
      }),
      (e.keyframes.Document.prototype.pluginsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 18);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.id = function () {
        var e = this.bb.__offset(this.bb_pos, 20);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.mutate_id = function (e) {
        var t = this.bb.__offset(this.bb_pos, 20);
        return t === 0 ? !1 : (this.bb.writeInt32(this.bb_pos + t, e), !0);
      }),
      (e.keyframes.Document.prototype.manifest = function (e) {
        var t = this.bb.__offset(this.bb_pos, 22);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Document.prototype.manifestLength = function () {
        var e = this.bb.__offset(this.bb_pos, 22);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.manifestArray = function () {
        var e = this.bb.__offset(this.bb_pos, 22);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Document.prototype.progressMarkers = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 24);
        return r
          ? (n || new e.keyframes.ProgressMarker()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.progressMarkersLength = function () {
        var e = this.bb.__offset(this.bb_pos, 24);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.videos = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 26);
        return r
          ? (n || new e.keyframes.Video()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.videosLength = function () {
        var e = this.bb.__offset(this.bb_pos, 26);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.startDocument = function (e) {
        e.startObject(12);
      }),
      (e.keyframes.Document.addSize = function (e, t) {
        e.addFieldStruct(0, t, 0);
      }),
      (e.keyframes.Document.addFrameRate = function (e, t) {
        e.addFieldFloat32(1, t, 0);
      }),
      (e.keyframes.Document.addDuration = function (e, t) {
        e.addFieldFloat32(2, t, 0);
      }),
      (e.keyframes.Document.addVersion = function (e, t) {
        e.addFieldInt32(3, t, 0);
      }),
      (e.keyframes.Document.addRootLayer = function (e, t) {
        e.addFieldOffset(4, t, 0);
      }),
      (e.keyframes.Document.addBitmaps = function (e, t) {
        e.addFieldOffset(5, t, 0);
      }),
      (e.keyframes.Document.createBitmapsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startBitmapsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.addSubdocuments = function (e, t) {
        e.addFieldOffset(6, t, 0);
      }),
      (e.keyframes.Document.createSubdocumentsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startSubdocumentsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.addPlugins = function (e, t) {
        e.addFieldOffset(7, t, 0);
      }),
      (e.keyframes.Document.createPluginsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startPluginsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.addId = function (e, t) {
        e.addFieldInt32(8, t, 0);
      }),
      (e.keyframes.Document.addManifest = function (e, t) {
        e.addFieldOffset(9, t, 0);
      }),
      (e.keyframes.Document.createManifestVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startManifestVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Document.addProgressMarkers = function (e, t) {
        e.addFieldOffset(10, t, 0);
      }),
      (e.keyframes.Document.createProgressMarkersVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startProgressMarkersVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.addVideos = function (e, t) {
        e.addFieldOffset(11, t, 0);
      }),
      (e.keyframes.Document.createVideosVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startVideosVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.endDocument = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Document.finishDocumentBuffer = function (e, t) {
        e.finish(t, "KEYF");
      }),
      (e.keyframes.Document.createDocument = function (
        t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
      ) {
        return (
          e.keyframes.Document.startDocument(t),
          e.keyframes.Document.addSize(t, n),
          e.keyframes.Document.addFrameRate(t, r),
          e.keyframes.Document.addDuration(t, o),
          e.keyframes.Document.addVersion(t, a),
          e.keyframes.Document.addRootLayer(t, i),
          e.keyframes.Document.addBitmaps(t, l),
          e.keyframes.Document.addSubdocuments(t, s),
          e.keyframes.Document.addPlugins(t, u),
          e.keyframes.Document.addId(t, c),
          e.keyframes.Document.addManifest(t, d),
          e.keyframes.Document.addProgressMarkers(t, m),
          e.keyframes.Document.addVideos(t, p),
          e.keyframes.Document.endDocument(t)
        );
      }),
      (a.exports = e.keyframes));
  },
  null,
);
