package com.example.selog.controller;

import com.example.selog.dto.room.ItemDto;
import com.example.selog.exception.CustomException;
import com.example.selog.exception.error.ErrorCode;
import com.example.selog.response.ErrorResponse;
import com.example.selog.response.SuccessResponse;
import com.example.selog.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/room")
public class RoomController {
    private final RoomService roomService;

    @GetMapping("/{room_id}")
    public ResponseEntity<?> findRoomInfoById(@PathVariable Long room_id) {
        try{
            List<ItemDto> itemDtoList = roomService.findRoomInfoById(room_id);
            return new ResponseEntity<>(new SuccessResponse(itemDtoList), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateItemLocation(@RequestBody List<ItemDto> itemDtoList) {
        try{
            List<ItemDto> updateItemList = roomService.updateItemLocation(itemDtoList);
            return new ResponseEntity<>(new SuccessResponse(updateItemList), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("items/{room_id}")
    public ResponseEntity<?> findUserItemByRoomId(@PathVariable Long room_id) {
        try{
            List<ItemDto> itemDtoList = roomService.findUserItemByRoomId(room_id);
            return new ResponseEntity<>(new SuccessResponse(itemDtoList), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
