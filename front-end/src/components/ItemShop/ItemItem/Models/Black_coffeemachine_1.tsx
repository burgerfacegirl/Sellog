/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/black_coffeemachine_1.glb -t
*/

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { useRecoilState } from "recoil";
import { itemTargetState, myItemsState } from "@/recoil/myroom/atoms";

type GLTFResult = GLTF & {
  nodes: {
    Coffemaker: THREE.Mesh;
    Circle014: THREE.Mesh;
    Circle015: THREE.Mesh;
    Circle016: THREE.Mesh;
    Plane056: THREE.Mesh;
  };
  materials: {
    Metal: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
  };
};

export function Black_coffeemachine_1(
  props: JSX.IntrinsicElements["group"] | any
) {
  const { nodes, materials } = useGLTF(
    "/models/items/black_coffeemachine_1.glb"
  ) as GLTFResult;

  const [propsX, propsY, propsZ] = props.position;
  const propsDeg = props.deg;

  // 좌표 (서버에 저장된 좌표로 수정하기)
  const [position, setPosition] = useState({ x: propsX, y: propsY, z: propsZ });
  const [isDragging, setIsDragging] = useState(false);

  // 회전 정보 (서버에 저장된 좌표로 수정하기)
  const [rotation, setRotation] = useState(propsDeg);

  // 타겟 정보
  const [target, setTarget] = useRecoilState(itemTargetState);

  const { scene, camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  const [myItems, setMyItems] = useRecoilState(myItemsState);

  const updateTagetItemPosition = (
    id: number,
    x: number,
    y: number,
    z: number,
    deg: number
  ) => {
    myItems.forEach((item, i) => {
      // itemId가 일치하는 아이템 선별
      if (item.itemId === id) {
        // 변화된 포지션 저장
        let newItemPosition = {
          ...item,
          x,
          y,
          z,
          deg,
        };
        // 불변성 유지를 위한 새로운 배열 생성
        const newItems = [...myItems];
        newItems[i] = newItemPosition;
        console.log(newItems, "확인");

        // 새로운 배열을 atom에 저장
        setMyItems(newItems);
      }
    });
  };

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (props.activePage === "myitems") {
      gl.domElement.addEventListener("click", handleWindowClick);

      // atom에 변화된 포지션 저장
      updateTagetItemPosition(
        props.itemId,
        position.x,
        position.y,
        position.z,
        rotation
      );
    }

    return () => {
      if (props.activePage === "myitems") {
        gl.domElement.removeEventListener("click", handleWindowClick);
      }
    };
  }, [isDragging]);

  useFrame(({ mouse }) => {
    if (props.activePage === "myitems") {
      if (isDragging) {
        const found = intersect(mouse);

        if (found.length > 0) {
          for (let i = 0; i < found.length; i++) {
            if (!found[i].object.userData.ground) continue;

            // 물체가 마우스와 만난 지점으로 위치를 업데이트하기
            const newPosition = found[i].point;
            setPosition({ x: newPosition.x, y: position.y, z: newPosition.z });
            break;
          }
        }
      }
    }
  });

  // 물체 회전
  if (
    props.rotationLeftButtonRef.current &&
    props.rotationRigthButtonRef.current &&
    props.upButtonRef.current &&
    props.downButtonRef.current
  ) {
    const leftRotation = () => {
      let newRotation = (rotation - 10) % 360;
      setRotation(newRotation);
    };

    const rightRotation = () => {
      let newRotation = (rotation + 10) % 360;
      setRotation(newRotation);
    };

    const positionUp = () => {
      if (position.y < 3) {
        const newY = Number(position.y) + 0.2;
        setPosition({ x: position.x, y: newY, z: position.z });
      }
    };

    const positionDown = () => {
      if (position.y > -2.5) {
        const newY = Number(position.y) - 0.2;
        setPosition({ x: position.x, y: newY, z: position.z });
      }
    };

    if (target === "Black_coffeemachine_1") {
      props.rotationLeftButtonRef.current.addEventListener(
        "click",
        leftRotation
      );
      props.rotationRigthButtonRef.current.addEventListener(
        "click",
        rightRotation
      );
      props.upButtonRef.current.addEventListener("click", positionUp);
      props.downButtonRef.current.addEventListener("click", positionDown);
    } else {
      props.rotationLeftButtonRef.current.removeEventListener(
        "click",
        leftRotation
      );
      props.rotationRigthButtonRef.current.removeEventListener(
        "click",
        rightRotation
      );
    }
  }

  return (
    <group
      {...props}
      dispose={null}
      position={[position.x, position.y, position.z]}
      userData={{ draggable: true, name: "Black_coffeemachine_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Black_coffeemachine_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh
        geometry={nodes.Coffemaker.geometry}
        material={materials.Metal}
        scale={1.11}
      >
        <mesh
          geometry={nodes.Circle014.geometry}
          material={materials.black}
          position={[0.05, 0.76, 0]}
        />
        <mesh
          geometry={nodes.Circle015.geometry}
          material={materials.Glass}
          position={[0.04, 0.07, 0]}
        >
          <mesh
            geometry={nodes.Circle016.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.Plane056.geometry}
            material={materials.black}
            position={[0.12, 0.26, 0]}
            rotation={[0, 0, -0.82]}
          />
        </mesh>
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/black_coffeemachine_1.glb");
