import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ICharacter } from "../../entities/character.types";
import { apiClient } from "../../shared/api";
import { Nullable } from "../../shared/types";

type CharacterInfo = Pick<ICharacter, "name" | "status" | "image" | "species" | "gender" | "origin" | "location">

const SingleCharacter = () => {
    const { id } = useParams();
    const [characterInfo, setCharacterInfo] = useState<Nullable<CharacterInfo>>();

    const fetchSingleuser = async (id: number) => {
        try {
            const response = await apiClient.get<ICharacter>(`/character/${id}`)
            const {
                name, status, image,
                species, gender, origin, location
            } = response.data;

            setCharacterInfo({
                name, status, image,
                species, gender, origin, location
            })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if(id) {
            fetchSingleuser(+id)
        }
    }, [id])
    return (
        <div>
            {characterInfo?.name}
            {characterInfo?.gender}
            {characterInfo?.location.name}
            {characterInfo?.origin.name}
            {characterInfo?.species}
            {characterInfo?.status}
            <img src={characterInfo?.image} alt="Image main"/>
        </div>
    );
};

export default SingleCharacter;