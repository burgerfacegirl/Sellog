/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/wood_desk_0.glb -t
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, OrthographicCamera, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Scale } from "@mui/icons-material";
import { useFrame, useThree } from "@react-three/fiber";
import { useRecoilState } from "recoil";
import { itemTargetState } from "@/recoil/myroom/atoms";

type GLTFResult = GLTF & {
  nodes: {
    Desk: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane012: THREE.Mesh;
  };
  materials: {
    Wood2: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
  };
};

export function WoodDeskEdit(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/wood_desk_0.glb"
  ) as GLTFResult;

  // 좌표 (서버에 저장된 좌표로 수정하기)
  const [position, setPosition] = useState({ x: 0, y: -0.5, z: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // 회전 유무 판단
  const [isRotation, setIsRotation] = useState(false);

  // 회전 정보 (서버에 저장된 좌표로 수정하기)
  const [rotation, setRotation] = useState(0);

  // 타겟 정보
  const [target, setTarget] = useRecoilState(itemTargetState);

  const { scene, camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  // const dispatch = useAppDispatch();
  // const handlePositionUpdate = (
  //   id: number,
  //   x: string,
  //   y: string,
  //   z: string
  // ) => {
  //   dispatch(
  //     positionUpdate({
  //       diaryId: id,
  //       x: x,
  //       y: y,
  //       z: z,
  //     })
  //   );
  // };

  useEffect(() => {
    gl.domElement.addEventListener("click", () => {
      if (isDragging) {
        setIsDragging(false);
      }
    });

    // const handleWindowClick = (e: MouseEvent) => {
    //   if (isDragging) {
    //     setIsDragging(false);
    //   }
    // };
  }, [isDragging]);

  useFrame(({ mouse }) => {
    if (isDragging) {
      const found = intersect(mouse);

      if (found.length > 0) {
        for (let i = 0; i < found.length; i++) {
          if (!found[i].object.userData.ground) continue;

          // 물체가 마우스와 만난 지점으로 위치를 업데이트하기
          const newPosition = found[i].point;
          setPosition({ x: newPosition.x, y: -0.5, z: newPosition.z });
          break;
        }
      }
    }
  });

  // 물체 회전
  if (props.rotationButtonRef.current) {
    // if (props.target === "woodDesk") {
    console.log(target, 1);

    if (target === "woodDesk") {
      props.rotationButtonRef.current.addEventListener("click", () => {
        console.log("click", 1);
        setRotation((rotation + 10) % 360);
      });
    }
  }

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={[position.x, position.y, position.z]}
        userData={{ draggable: true, name: "wood_desk" }}
        onClick={() => {
          if (!isDragging) setIsDragging(true);
          setTarget("woodDesk");
        }}
        rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
      >
        <mesh
          geometry={nodes.Desk.geometry}
          material={materials.Wood2}
          position={[0, -2.16, 0]}
          userData={{ name: "wood_desk" }}
          name={"wood_desk"}
        >
          <mesh
            geometry={nodes.Circle001.geometry}
            material={materials.Wood2}
            position={[0.9, 1.3, 1.11]}
            userData={{ name: "wood_desk" }}
            name={"wood_desk"}
          />
          <mesh
            geometry={nodes.Circle002.geometry}
            material={materials.Wood2}
            position={[0.9, 0.7, 1.11]}
            userData={{ name: "wood_desk" }}
            name={"wood_desk"}
          />
          <mesh
            geometry={nodes.Plane002.geometry}
            material={materials.Wood2}
            userData={{ name: "wood_desk" }}
            name={"wood_desk"}
          />
          <mesh
            geometry={nodes.Plane003.geometry}
            material={materials.Wood2}
            userData={{ name: "wood_desk" }}
            name={"wood_desk"}
          />
          <mesh
            geometry={nodes.Plane004.geometry}
            material={materials.Wood2}
            position={[0, 0.33, 1.11]}
            userData={{ name: "wood_desk" }}
            name={"wood_desk"}
          />
          <mesh
            geometry={nodes.Plane012.geometry}
            material={materials.Wood}
            position={[0, 0.33, 1.11]}
            userData={{ name: "wood_desk" }}
            name={"wood_desk"}
          />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/items/wood_desk_0.glb");
