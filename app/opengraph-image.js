import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"72px",background:"#10161b",color:"#efece3",fontFamily:"Arial"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:28,letterSpacing:4}}>
          <span>NK</span><span style={{color:"#ba8b45"}}>FORT WORTH / DFW</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:24}}>
          <div style={{fontFamily:"Georgia",fontSize:82,lineHeight:1.02}}>Noah Krynicki</div>
          <div style={{fontSize:42,color:"#d8d3c7"}}>Product · Technical Operations · Business Systems</div>
        </div>
        <div style={{fontSize:22,color:"#9ba0a2",letterSpacing:2}}>SOFTWARE · SYSTEMS · ZERO-TO-ONE BUILDING</div>
      </div>
    ),
    size
  );
}
