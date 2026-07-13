__d(
  "WAWebWindowsHybridBridge.v2609",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2609",
    "WAWebWindowsHybridBridgeAbProps.v2609",
    "WAWebWindowsHybridBridgeAdv.v2609",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2609",
    "WAWebWindowsHybridBridgeConnection.v2609",
    "WAWebWindowsHybridBridgeContacts.v2609",
    "WAWebWindowsHybridBridgeDebugFeatures.v2609",
    "WAWebWindowsHybridBridgeLinksPreview.v2609",
    "WAWebWindowsHybridBridgeMediaFiles.v2609",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2609",
    "WAWebWindowsHybridBridgeNativeAppState.v2609",
    "WAWebWindowsHybridBridgePictures.v2609",
    "WAWebWindowsHybridBridgePreferences.v2609",
    "WAWebWindowsHybridBridgeRateTheApp.v2609",
    "WAWebWindowsHybridBridgeScalingControl.v2609",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2609",
    "WAWebWindowsHybridBridgeSharesheet.v2609",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2609",
    "WAWebWindowsHybridBridgeTouchpadFix.v2609",
    "WAWebWindowsHybridBridgeVoip.v2609",
    "WAWebWindowsHybridBridgeWam.v2609",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2609",
          ).WindowsHybridBridgeAbProps_v2609)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2609",
          ).WindowsHybridBridgeWam_v2609)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2609",
          ).WindowsHybridBridgePreferences_v2609)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2609",
          ).WindowsHybridBridgeScalingControl_v2609)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2609",
          ).WindowsHybridBridgePictures_v2609)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2609",
            ).WindowsHybridBridgeDebugFeatures_v2609)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2609",
          ).VoipWinRTBridge_v2609)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2609",
          ).WAWebWindowsHybridBridgeRateTheApp_v2609)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2609",
          ).WindowsHybridBridgeConnection_v2609)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2609",
          ).WindowsHybridBridgeTouchpadFix_v2609)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2609",
          ).WindowsHybridBridgeLinksPreview_v2609)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2609",
            ).WindowsHybridBridgeContacts_v2609)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2609",
            ).WindowsHybridBridgeContacts_v2609)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2609",
          ).WAWebWindowsHybridBridgeMediaFiles_v2609)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2609",
          ).WAWebWindowsHybridBridgeSharesheet_v2609)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2609",
          ).WindowsHybridAppActivationBridge_v2609)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2609",
          ).WindowsHybridBridgeNativeAppState_v2609)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2609",
          ).WindowsHybridBridgeSystemIntegrations_v2609)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2609",
          ).WindowsHybridBridgeBrowserExtensions_v2609)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2609",
          ).WindowsHybridBridgeSeamlessMigration_v2609)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2609",
          ).WindowsHybridBridgeMediaTranscoder_v2609)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2609",
          ).WindowsHybridBridgeAdv_v2609)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2609 = e;
  },
  98,
);
