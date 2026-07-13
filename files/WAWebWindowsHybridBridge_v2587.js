__d(
  "WAWebWindowsHybridBridge.v2587",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2587",
    "WAWebWindowsHybridBridgeAbProps.v2587",
    "WAWebWindowsHybridBridgeAdv.v2587",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2587",
    "WAWebWindowsHybridBridgeConnection.v2587",
    "WAWebWindowsHybridBridgeContacts.v2587",
    "WAWebWindowsHybridBridgeDebugFeatures.v2587",
    "WAWebWindowsHybridBridgeLinksPreview.v2587",
    "WAWebWindowsHybridBridgeMediaFiles.v2587",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2587",
    "WAWebWindowsHybridBridgeNativeAppState.v2587",
    "WAWebWindowsHybridBridgePictures.v2587",
    "WAWebWindowsHybridBridgePreferences.v2587",
    "WAWebWindowsHybridBridgeRateTheApp.v2587",
    "WAWebWindowsHybridBridgeScalingControl.v2587",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2587",
    "WAWebWindowsHybridBridgeSharesheet.v2587",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2587",
    "WAWebWindowsHybridBridgeTouchpadFix.v2587",
    "WAWebWindowsHybridBridgeVoip.v2587",
    "WAWebWindowsHybridBridgeWam.v2587",
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
            "WAWebWindowsHybridBridgeAbProps.v2587",
          ).WindowsHybridBridgeAbProps_v2587)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2587",
          ).WindowsHybridBridgeWam_v2587)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2587",
          ).WindowsHybridBridgePreferences_v2587)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2587",
          ).WindowsHybridBridgeScalingControl_v2587)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2587",
          ).WindowsHybridBridgePictures_v2587)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2587",
            ).WindowsHybridBridgeDebugFeatures_v2587)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2587",
          ).VoipWinRTBridge_v2587)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2587",
          ).WAWebWindowsHybridBridgeRateTheApp_v2587)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2587",
          ).WindowsHybridBridgeConnection_v2587)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2587",
          ).WindowsHybridBridgeTouchpadFix_v2587)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2587",
          ).WindowsHybridBridgeLinksPreview_v2587)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2587",
            ).WindowsHybridBridgeContacts_v2587)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2587",
            ).WindowsHybridBridgeContacts_v2587)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2587",
          ).WAWebWindowsHybridBridgeMediaFiles_v2587)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2587",
          ).WAWebWindowsHybridBridgeSharesheet_v2587)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2587",
          ).WindowsHybridAppActivationBridge_v2587)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2587",
          ).WindowsHybridBridgeNativeAppState_v2587)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2587",
          ).WindowsHybridBridgeSystemIntegrations_v2587)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2587",
          ).WindowsHybridBridgeBrowserExtensions_v2587)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2587",
          ).WindowsHybridBridgeSeamlessMigration_v2587)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2587",
          ).WindowsHybridBridgeMediaTranscoder_v2587)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2587",
          ).WindowsHybridBridgeAdv_v2587)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2587 = e;
  },
  98,
);
